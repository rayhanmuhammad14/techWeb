from flask import Blueprint, render_template

pt = Blueprint("pt",__name__, static_folder="static",
               template_folder="templates", static_url_path='pt/static')

@pt.route('/')
def index():
    return render_template('pt.html')