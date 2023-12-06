import sklearn
from flask import Flask, render_template, jsonify, request
from model import load, prediksi

app = Flask(__name__)

# load model dan scaler
load()

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/predict", methods=["POST"])
def predict():
    # menangkap data yang diinput user melalui form
    is_tv_subscriber = int(request.form['is_tv_subscriber'])
    is_movie_package_subscriber = int(request.form['is_movie_package_subscriber'])
    subscription_age = float(request.form['subscription_age'])
    bill_avg = int(request.form['bill_avg'])
    reamining_contract = float(request.form['reamining_contract'])
    service_failure_count = int(request.form['service_failure_count'])
    download_avg = float(request.form['download_avg'])
    upload_avg = float(request.form['upload_avg'])
    download_over_limit = int(request.form['download_over_limit'])

    # melakukan prediksi menggunakan model yang telah dibuat
    data = [[is_tv_subscriber, is_movie_package_subscriber, subscription_age, bill_avg, reamining_contract, service_failure_count, download_avg, upload_avg, download_over_limit]]
    prediction_result, confidence = prediksi(data)
    return render_template('index.html', hasil_prediksi=prediction_result, nilai_kepercayaan=confidence)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)