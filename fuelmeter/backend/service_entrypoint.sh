#!/bin/sh

sleep 10
flask --app backend:create_app db migrate
flask --app backend:create_app db upgrade 
waitress-serve --port 5000 --call 'backend:create_app'

tail -f /dev/null