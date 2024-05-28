from flask import Flask, render_template, request, jsonify

chat_list = []

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/run-python-function', methods=['POST'])
def run_python_function():
    data = request.json
    input_value = data.get('input_value', '')
    result = my_python_function(input_value)
    return jsonify(result=result)

def my_python_function(input_value):
    chat_list.append(input_value)
    # This function processes the input_value and returns a result
    print(chat_list)
    return f"Processed input: {input_value}"

if __name__ == '__main__':
    app.run(debug=True)
