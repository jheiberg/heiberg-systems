# Use a slim Python base image
FROM python:3.12.4-alpine3.20

RUN apk update && apk add --update --no-cache libpq-dev musl-dev gcc
 
ENV USERNAME=fuelmeter
ENV WORKING_DIR=/home/fuelmeter

WORKDIR ${WORKING_DIR}

COPY backend ./backend
COPY backend/client_secrets.json .
COPY backend/service_entrypoint.sh .

RUN chmod +x service_entrypoint.sh

RUN addgroup -S ${USERNAME} && \
    adduser -S ${USERNAME} -G ${USERNAME}

RUN chown -R ${USERNAME}:${USERNAME} ${WORKING_DIR}
RUN chmod -R u=rwx,g=rwx ${WORKING_DIR}

USER ${USERNAME}
ENV PATH "$PATH:/home/${USERNAME}/.local/bin"

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r backend/requirements.txt

ENV FLASK_APP=.

# Expose port where Flask app runs (usually 5000)
EXPOSE 5000
RUN flask --app backend/__init__.py db init

ENTRYPOINT [ "./service_entrypoint.sh" ]