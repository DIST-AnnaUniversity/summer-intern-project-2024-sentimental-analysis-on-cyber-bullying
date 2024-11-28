from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd
import os
from lime.lime_text import LimeTextExplainer
import matplotlib.pyplot as plt
import matplotlib

matplotlib.use('Agg')

app = Flask(__name__)

# Define your cyberbullying categories
CATEGORIES = {
    "Racial and Ethnic Slurs": [
        "nig", "n1g", "n i g", "neg", "coon", "c00n", "c o o n", 
        "jew", "j3w", "j e w", "nazi", "naz1", "n a z i","nigga"
    ],
    "Sexual and Gender-Based Slurs": [
        "fag", "f@g", "f a g", "cunt", "c-u-n-t", "dick", 
        "d1ck", "d i c k", "whore", "whor3", "slut", "bitch", 
        "b!tch", "twat", "tw4t", "anal", "zoophile"
    ],
    "General Insults and Abusive Language": [
        "retard", "r e t a r d", "stupid", "loser", "suck", 
        "shit", "sh1t", "damn", "damm", "kill yourself", 
        "hope you die", "committed suicide", "idiot", "fuck", 
        "suck my", "gag my", "blow my", "cancer"
    ]
}

def load_model(model_name):
    model_path = os.path.join(os.getcwd(), 'model', model_name)
    return joblib.load(model_path)

def predictfunc(review, model):
    prediction = model.predict(review)
    sentiment = 'Positive' if prediction[0] == 1 else 'Negative'
    return prediction[0], sentiment

def determine_category(content):
    """Check the content against predefined categories and return the relevant category."""
    for category, terms in CATEGORIES.items():
        for term in terms:
            if term in content:
                return category
    return None

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        content = request.form['review']
        selected_model = request.form['model']
        
        model = load_model(selected_model)
        
        review = pd.Series(content)
        prediction, sentiment = predictfunc(review, model)
        print(f"Prediction value: {prediction}, Sentiment: {sentiment}")

        pred_value = int(prediction)  
        
        if pred_value == 0:
            pred1 = 'Cyberbullying'
            category = determine_category(content)  # Determine the category based on your logic
            print(f"Detected Cyberbullying category: {category}")  # Debugging line
        elif pred_value == 1:
            pred1 = 'Not Cyberbullying'
            category = None  # No category needed
        else:
            pred1 = 'Unexpected prediction value'
            category = None

        explainer = LimeTextExplainer(class_names=['Cyberbullying', 'Not Cyberbullying'])
        exp = explainer.explain_instance(content, model.predict_proba, num_features=10, top_labels=2)
        
        lime_img_path = os.path.join('static', 'lime_explanation.png')
        fig = exp.as_pyplot_figure(label=1)
        plt.savefig(lime_img_path)
        plt.close()

        return render_template("predict.html", pred=pred1, category=category, lime_img=lime_img_path)

if __name__ == '__main__':
    if not os.path.exists('static'):
        os.makedirs('static')
    
    app.run(host='0.0.0.0', port=8080)
