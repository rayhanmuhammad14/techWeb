from flask import Blueprint, render_template

properti = Blueprint('properti',__name__,static_folder='static',
                     template_folder='templates', static_url_path='/static')

@properti.route('/')
def index():
    return "OKE"