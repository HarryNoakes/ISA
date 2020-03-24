import config


from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask import Flask, redirect, url_for
from flask_login import LoginManager


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    db = SQLAlchemy(app)
    migrate = Migrate(app, db)
    #Imports blueprints

    from app.routes import main
    app.register_blueprint(main)

    return app

if __name__ == '__main__':
    app = create_app(config)
    app.run()

