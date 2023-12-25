from flask import Flask
from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS
from datetime import timedelta

app = Flask(__name__)

app.config['SECRET_KEY'] = 'b758cc27bb155b752aeac59960810d18'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SESSION_TYPE'] = 'filesystem'
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1)

db = SQLAlchemy(app)
# CORS(app, supports_credentials=True)


from backend import routes