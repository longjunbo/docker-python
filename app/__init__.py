from bottle import Bottle

app = Bottle()

@app.route('/')
def index():
    return 'Hello World!'
