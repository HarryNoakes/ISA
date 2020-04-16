from flask import Flask, render_template, flash, redirect, url_for, Blueprint
from webapp.forms import LoginForm

main = Blueprint('main', __name__)
username = ""


@main.route('/')
@main.route('/home')
def index():
    print(username)
    print(username)
    return render_template('index.html', title='Home', user=username)


@main.route('/index')
def root():
    return redirect(url_for('main.index'))


@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/test')
def test():
    from ISA import db
    from webapp.models import User
    #db.create_all()
    #u = User(username="Cucklord", email="harryn@gmail.com")
    #db.session.add(u)
    #db.session.commit()

    users = User.query.all()
    print(users)
    return render_template('test.html', user=users)


@main.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    global username
    if form.validate_on_submit():
        flash('Login requested for user {}, remember_me={}'.format(
            form.username.data, form.remember_me.data))
        username = form.username.data
        return redirect(url_for('main.index'))
    return render_template('login.html', title='Sign In', form=form)

@main.route('/training')


def training():
    email_slots = [{"slot": "slot"+str(x),
                    "buttonid":"emailBtn"+str(x),
                    "name":"Email "+str(x),
                    "iframeid":"email"+str(x),
                    "src":"email/testemail"+str(x),
                    "iframename":"iframe"+str(x)
                    } for x in range(1, 10)]
    #replicate email slots with answer slots?
    answer_slots = [{"slot": "slot" + str(y),
                     "answerButtons":"answerButtons" + str(y),
                     "answerid":"answerBtn:"+str(y),
                     "answerConfirm":"answerConfirm"+str(y),
                     "name":"Is Email "+str(y)+" a phishing email?" } for y in range(1, 10)]
    return render_template('training.html', emails=email_slots, answers=answer_slots)



@main.route('/email/<arg1>', methods=['GET'])
def testemail(arg1):



    return render_template('email/{0}.html'.format(arg1))