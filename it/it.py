from flask import Blueprint, render_template

it = Blueprint("it",__name__, static_folder="static",template_folder="templates")

@it.route('/')
def index():
    return render_template('it.html')

@it.errorhandler(404)
def error404(error):
    return render_template('404.html')

@it.errorhandler(403)
def error403(error):
    return render_template('403.html')


