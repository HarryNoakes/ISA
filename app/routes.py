from flask import Flask, render_template, flash, redirect, url_for
from app.forms import LoginForm
from config import Config

app = Flask(__name__)

app.config.from_object(Config)



@app.route('/')
@app.route('/home')
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

@app.route('/index')
def root():
    return redirect('/')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        return redirect(url_for('index'))
    return render_template('login.html', title='Sign In', form=form)

if __name__ == '__main__':
    app.run()
