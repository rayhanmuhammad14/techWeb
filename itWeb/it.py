from flask import Blueprint, render_template

it = Blueprint("it",__name__, 
               static_folder="static",
               template_folder="templates", 
               static_url_path='/static')

@it.route('/')
def index():
    return render_template('it.html')


