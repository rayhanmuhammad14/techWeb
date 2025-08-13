from flask import Flask, render_template
from itWeb.it import it
from pt.pt import pt

app = Flask(__name__)
app.register_blueprint(it, url_prefix='/it')
app.register_blueprint(pt, url_prefix='/')

# ERROR HANDLER AREA 
@app.errorhandler(404)
def error404(error):
    return render_template('404.html')

@app.errorhandler(403)
def error403(error):
    return render_template('403.html')

if __name__== '__main__':
    app.run('0.0.0.0',debug=True)