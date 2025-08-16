from flask import Flask, render_template
from it.it import it
from pt.pt import pt
from properti.properti import properti
import re

app = Flask(__name__)
app.register_blueprint(it, url_prefix='/it')
app.register_blueprint(pt, url_prefix='/')
app.register_blueprint(properti, url_prefix='/properti')

@app.route("/comingSoon/<url>")
def comingSoon(url):
    hasil = re.sub(r'(?<!^)(?=[A-Z])', ' ', url)
    url_data = hasil.upper()
    return render_template('comingSoon.html', url=url_data)

if __name__== '__main__':
    app.run('0.0.0.0',debug=True)