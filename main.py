from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin  # Add this line
from flask_login import LoginManager
from os import path
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user
from flask_login import UserMixin
from sqlalchemy.sql import func
from datetime import datetime
from flask import request, redirect, url_for, jsonify

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
db = SQLAlchemy()
DB_NAME = "database.db"
app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
db.init_app(app)

with app.app_context():
    db.create_all()
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)

class WeekLog(db.Model):
     id = db.Column(db.Integer, primary_key=True)  
     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False) 
     d1 = db.Column(db.Integer)
     d2 = db.Column(db.Integer)
     d3 = db.Column(db.Integer)
     d4 = db.Column(db.Integer)
     d5 = db.Column(db.Integer)
     d6 = db.Column(db.Integer)
     d7 = db.Column(db.Integer)
     
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


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        emails = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=emails).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                user_data = [{'id': user.id, 'username': user.username, 'email': user.email, 'd1': user.id.d1, 'd2':user.id.d2, 'd3':user.id.d3, 'd4':user.id.d4, 'd5':user.id.d5, 'd6':user.id.d6, 'd2':user.id.d2} for user in users]
                return jsonify(user_data)
            else:
                return jsonify({'response': 'Failed Login Attempt'})
        else:
            return jsonify({'response' : 'Email does not exist.'})



@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@app.route('/signup', methods=['POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        name = request.form.get('name')
        password = request.form.get('password')

        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({'message':'Email already exists.'})
        elif len(email) < 4:
            return jsonify({'message':'Email must be greater than 3 characters.'})
        elif len(name) < 2:
            return jsonify({'message':'First name must be greater than 1 character.'})
        elif len(password) < 7:
            return jsonify({'message':'Password must be at least 7 characters.'})
        else:
            new_user = User(id=db.session.query(User).count() + 1, email=email, username=name, password=generate_password_hash(
                password, method='pbkdf2:sha256'))
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            return jsonify({"Response": 'User is Created'})
        
@app.route('/fetch-user-data', methods=['POST'])
def fetch_user_data():
    users = User.query.all()
    user_data = [{'id': user.id, 'username': user.username, 'email': user.email, 'd1': user.id.d1, 'd2':user.id.d2, 'd3':user.id.d3, 'd4':user.id.d4, 'd5':user.id.d5, 'd6':user.id.d6, 'd2':user.id.d2} for user in users]
    return jsonify(user_data)

if __name__ == '__main__':
    app.run(debug=True)
