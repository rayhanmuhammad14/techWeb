from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# ERROR HANDLER AREA 
@app.errorhandler(404)
def error404(error):
    return render_template('404.html')

@app.errorhandler(403)
def error404(error):
    return render_template('403.html')

if __name__== '__main__':
    app.run('0.0.0.0',debug=True)