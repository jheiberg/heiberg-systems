FROM node:current-alpine3.20 as builder

RUN apk update && apk add --update --no-cache curl

WORKDIR /app

# Install dotenvx
RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY public ./public
COPY src ./src
COPY .env .env
COPY .env.keys .env.keys

RUN yarn build


FROM nginx:stable-alpine3.19-slim

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]