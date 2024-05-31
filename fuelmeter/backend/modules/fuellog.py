# encoding: utf-8

from flask import Blueprint, request
from backend.models.fuellog import FuelLog
from backend.database import db


blueprint = Blueprint("fuellog", __name__, url_prefix="/fuel")


@blueprint.route("/logs", methods=["GET"])
def get_logs():
    logs = db.session.execute(db.select(FuelLog))
    return FuelLog.to_dict(logs)


@blueprint.route("/logs", methods=["POST"])
def add_log():
    data = request.get_json()
    fuelLog = FuelLog(data["odometer"], data["liter"], data["price"])
    db.session.add(fuelLog)
    db.session.commit()
    return "Log has been entered correctly!"
