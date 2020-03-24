from flask import Flask, render_template, flash, redirect, url_for, Blueprint
from webapp.forms import LoginForm

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/home')
def index():
    user = {'username' : 'Miguel'}
    posts = [
        {
            'author' : {'username' : 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The avengers movie was so cool!'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)

@main.route('/index')
def root():
    return redirect(url_for('main.index'))

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect(url_for('index'))
    return render_template('login.html', title='Sign In', form=form)
