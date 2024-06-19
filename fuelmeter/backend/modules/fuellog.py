# encoding: utf-8

from backend.__init__ import oidc
from flask import Blueprint, request
from backend.models.fuellog import FuelLog
from backend.database import db


fuellog = Blueprint("fuellog", __name__, url_prefix="/fuel")


@fuellog.route("/logs", methods=["GET"])
@oidc.accept_token()
def get_logs():
    logs = db.session.execute(db.select(FuelLog))
    return FuelLog.to_dict(logs)


@fuellog.route("/logs", methods=["POST"])
@oidc.accept_token()
def add_log():
    data = request.get_json()
    fuelLog = FuelLog(data["odometer"], data["liter"], data["price"])
    db.session.add(fuelLog)
    db.session.commit()
    return "Log has been entered correctly!"
