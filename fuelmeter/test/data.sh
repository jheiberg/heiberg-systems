curl -d "grant_type=client_credentials&client_id=flask-api&client_secret=zdejNttWWYZz8fbawDdc5Y02tHlJdg73" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:8080/realms/heiberg/protocol/openid-connect/token | jq

