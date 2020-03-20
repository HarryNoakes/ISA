from flask import Flask, render_template,redirect

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index.html')
def root():
    return redirect('/')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run()
