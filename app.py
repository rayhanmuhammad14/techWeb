from flask import Flask, render_template, request
from it.it import it
from pt.pt import pt
from properti.properti import properti

app = Flask(__name__)
app.register_blueprint(it, url_prefix='/it')
app.register_blueprint(pt, url_prefix='/')
app.register_blueprint(properti, url_prefix='/properti')

if __name__== '__main__':
    app.run('0.0.0.0',debug=True)