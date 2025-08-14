from flask import Blueprint, render_template, abort

it = Blueprint("it",__name__, 
               static_folder="static",
               template_folder="templates", 
               static_url_path='/static')

@it.route('/')
def index():
    return render_template('it.html')

@it.errorhandler(404)
def error404(error):
    return render_template('404It.html'), 404

@it.route('/<path:invalid_path>')
def page_not_found(invalid_path):
    # Memicu error 404 secara manual
    abort(404)