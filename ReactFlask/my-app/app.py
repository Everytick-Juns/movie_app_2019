from flask import Flask, request, render_template

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello!"


@app.route("/hello")
def hellohtml():
    return render_template("index.html")
    # return "Nice to meet you"


if __name__ == "__main__":
    app.run(debug="ON")
