from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db   ##means from __init__.py import db
from flask_login import login_user, login_required, logout_user, current_user


auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        emails = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email=emails).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=True)
                return jsonify({'response': 'Logged in successfully'})
            else:
                return jsonify({'response': 'Failed Login Attempt'})
        else:
            return jsonify({'response' : 'Email does not exist.'})



@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@auth.route('/sign-up', methods=['GET', 'POST'])
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
