from webapp import routes
from flask import Flask, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from webapp.routes import main
import config

'''
app = Flask(__name__)
app.config.from_object(config)
from webapp.routes import main
app.register_blueprint(main)



db = SQLAlchemy(app)
migrate = Migrate(app, db)
'''


