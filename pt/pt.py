from flask import Blueprint, render_template, abort

pt = Blueprint("pt",__name__, static_folder="static",
               template_folder="templates", static_url_path='pt/static')

@pt.route('/')
def index():
    return render_template('pt.html')

@pt.errorhandler(404)
def error404(error):
    return render_template('404Pt.html'), 404

@pt.route('/<path:invalid_path>')
def page_not_found(invalid_path):
    # Memicu error 404 secara manual
    abort(404)