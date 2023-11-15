from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
todo_list = []  # This will store your to-dos

@app.route('/')
def home():
    return render_template('index.html', todo_list=todo_list)

@app.route('/add', methods=['POST'])
def add():
    item = request.form['item']
    todo_list.append({'task': item, 'completed': False})
    return redirect(url_for('home'))

@app.route('/delete/<int:index>', methods=['POST'])
def delete(index):
    del todo_list[index]
    return redirect(url_for('home'))

@app.route('/complete/<int:index>', methods=['POST'])
def complete(index):
    todo_list[index]['completed'] = not todo_list[index]['completed']
    return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(debug=True)
