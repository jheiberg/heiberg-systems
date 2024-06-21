import os

class Config(object):
    
    MY_ENV_VAR = "XY"
    SQLALCHEMY_DATABASE_URI = "postgresql://heiberg:heiberg@db:5432/fuelmeter"
    #SQLALCHEMY_DATABASE_URI = "postgresql://heiberg:heiberg@localhost:5432/fuelmeter"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SECRET_KEY = os.environ.get('SECRET_KEY') or 'supersecretkey'
    OIDC_CLIENT_SECRETS = 'client_secrets.json'
    OIDC_COOKIE_SECURE = False
    OIDC_SCOPES = ['openid', 'email', 'profile']
    OIDC_INTROSPECTION_AUTH_METHOD = 'client_secret_post'