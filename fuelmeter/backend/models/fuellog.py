# encoding: utf-8

from backend.database import db
from backend.models.user import User

class FuelLog(db.Model):
    timestamp = db.Column(db.DateTime(timezone=True), primary_key=True, default=db.func.now())
    odometer = db.Column(db.Integer, nullable=False)
    liter = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float, nullable=False)

    #__table_args__ = (
    #    ForeignKeyConstraint([owner_id], [User.id], ondelete="NO ACTION"),
    #)

    def __init__(self, odometer, liter, price):
        self.odometer = odometer
        self.liter = liter
        self.price = price

    @classmethod
    def to_dict(cls, result):
        logs = []
        for res in result:
            log = res._asdict()["FuelLog"]
            log_dict = {"timestamp": log.timestamp, "odometer": log.odometer, "liter": log.liter, "price": log.price}
            logs.append(log_dict)
        return logs

    #def add_log(self):
    #    db.session.add(self)
    #    db.session.commit()
    #    return True

    #def get_logs():
    #    records = FuelLog.query.all()
    #    return [record.to_dict() for record in records]

    def __repr__(self):
        return f"{self.timestamp, self.odometer, self.liter, self.price}"
