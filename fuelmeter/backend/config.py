
class CoolConfig(object):
    
    MY_ENV_VAR = "XY"
    #SQLALCHEMY_DATABASE_URI = "postgresql://heiberg:heiberg@db:5432/fuelmeter"
    SQLALCHEMY_DATABASE_URI = "postgresql://heiberg:heiberg@localhost:5432/fuelmeter"
    SQLALCHEMY_TRACK_MODIFICATIONS = False