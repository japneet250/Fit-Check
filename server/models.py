from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
from datetime import datetime

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    activity_logs = db.relationship('ActivityLog', backref='user', lazy=True)


class Challenge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)  # Duration in days

    # Add daily targets for each day of the week
    day1_target = db.Column(db.Integer, nullable=True)
    day2_target = db.Column(db.Integer, nullable=True)
    day3_target = db.Column(db.Integer, nullable=True)
    day4_target = db.Column(db.Integer, nullable=True)
    day5_target = db.Column(db.Integer, nullable=True)
    day6_target = db.Column(db.Integer, nullable=True)
    day7_target = db.Column(db.Integer, nullable=True)

class ActivityLog(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    date = db.Column(db.Date, nullable=False)
    activity_count = db.Column(db.Integer, nullable=False)