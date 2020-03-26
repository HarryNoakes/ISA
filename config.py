import os
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

SECRET_KEY = os.urandom(24)
SQLALCHEMY_DATABASE_URL = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(BASE_DIR, 'webapp.db')
SQLALCHEMY_TRACK_MODIFICATIONS = False