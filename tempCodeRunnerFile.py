@app.errorhandler(404)
def error404(error):
    return render_template('404.html')

@app.errorhandler(403)
def error403(error):
    return render_template('403.html')