import configfrom flask import Flask, redirect, url_forfrom flask_login import LoginManagerfrom flask_sqlalchemy import SQLAlchemyfrom flask_migrate import Migratedef create_app(config):    app = Flask(__name__)    app.config.from_object(config)    from webapp.routes import main    app.register_blueprint(main)    return appapp = create_app(config)db = SQLAlchemy(app)migrate = Migrate(app, db)if __name__ == '__main__':    app.run(        port=app.config.get('PORT', 5000)    )