from flask import Blueprint, render_template, abort

properti = Blueprint('properti',__name__,static_folder='static',
                     template_folder='templates', static_url_path='/static')

@properti.route('/')
def index():
    return render_template('properti.html')

@properti.errorhandler(404)
def page_not_found(error):
    return render_template('404Properti.html'), 404

@properti.route('/<path:invalid_path>')
def page_not_found(invalid_path):
    # Memicu error 404 secara manual
    abort(404)

