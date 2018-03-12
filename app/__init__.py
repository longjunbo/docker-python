from bottle import Bottle, response
import json
import random

app = Bottle()

@app.route('/api/<value>')
def index(value=100):

    value = random.randrange(int(value))

    return {
        "value": value
    }
