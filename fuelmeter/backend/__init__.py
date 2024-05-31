# encoding: utf-8

from flask import Flask
from backend.modules import hello, goodbye, user, fuellog
from backend.config import CoolConfig
from flask_migrate import Migrate
from backend.database import db
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config.from_mapping(SECRET_KEY="My_Secret_Key")

    app.config.from_object(CoolConfig)
    CORS(app, origins=["http://localhost:3000"])

    db.init_app(app)
    from backend.models.user import User
    from backend.models.fuellog import FuelLog

    migrate = Migrate(app, db)

    app.register_blueprint(hello.blueprint)
    app.register_blueprint(goodbye.blueprint)
    app.register_blueprint(user.blueprint)
    app.register_blueprint(fuellog.blueprint)

    return app
