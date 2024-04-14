from flask import Blueprint, render_template, request, jsonify
from flask_passlib import Bcrypt
from flask_passport import Passport
from .models import User
from . import db

bcrypt = Bcrypt()
passport = Passport()
routes = Blueprint('routes', __name__)

@routes.route('/')
def index():
    return render_template('index.html')

@routes.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    user = User.query.filter_by(username=username).first()
    if user and bcrypt.verify(password, user.password):
        # Log the user in
        passport.login_user(user)
        return jsonify({'success': True, 'message': 'Logged in successfully'})
    else:
        return jsonify({'success': False, 'message': 'Invalid username or password'})

@routes.route('/logout')
def logout():
    passport.logout_user()
    return jsonify({'success': True, 'message': 'Logged out successfully'})
