from flask import request, jsonify, session
from backend import app, db
from backend.models import User, Post
from werkzeug.security import generate_password_hash, check_password_hash
from email_validator import validate_email, EmailNotValidError
import requests
import json
from datetime import datetime
from sqlalchemy import func


@app.route('/api/register', methods=["POST", "GET"])
def register():
    try:
        form_data = request.json
        username = form_data.get('username')
        email = form_data.get('email')
        password = form_data.get('password')
        confirm_password = form_data.get('confirm_password')
        # last_update = form_data.get('last_update')
        last_update = datetime.now()

        if not (username and email and password and confirm_password):
            return jsonify({'message': 'Make sure to fill all fields'}), 400
        elif password != confirm_password:
            return jsonify({"message": "Passwords don't match"}), 400

        # Validate email address
        valid = validate_email(email)
        if not valid:
            return jsonify({'message': 'Invalid email address.'}), 400

        # Hash the password
        hashed_password = generate_password_hash(password)

        # Create the User object and add it to the database
        user = User(username=username, email=email,
                    password=hashed_password, last_update=last_update)

        with app.app_context():
            db.session.add(user)
            db.session.commit()

        # session['user_id'] = user.id
        return jsonify({'message': 'User registered successfully'}), 200

    except Exception as e:
        # Log the exception for debugging
        print(f"Error: {str(e)}")
        return jsonify({'message': 'An error occurred while registering the user.'}), 500


@app.route('/api/login', methods=['POST'])
def login():
    form_data = request.json
    email = form_data.get('email')
    password = form_data.get('password')

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        session['user_id'] = user.id
        print(session)
        return jsonify({'message': 'success'}), 200
    else:
        return jsonify({'message': 'invalid credentials'}), 401


# api data for database posts
def set_db_posts():
    url = "https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2"

    querystring = {"type": "public",
                   "co2EmissionsClass": "A+", }

    headers = {
        "Accept-Language": "en",
        "X-RapidAPI-Key": "750a70fc79msh85e9cb11c5ea93ep162814jsn8c6f30c79e23",
        "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com"
    }

    request = requests.get(url, headers=headers, params=querystring)
    response = request.json()
    item = response['hits']
    # print(item[0])
    data = []

    for i in range(min(50, len(item))):
        recipe = dict()
        recipe['title'] = item[i]['recipe']['label']  # string
        recipe['img'] = item[i]['recipe']['image']  # string
        recipe['calories'] = item[i]['recipe']['calories']  # number
        recipe['totalTime'] = item[i]['recipe']['totalTime']  # number
        recipe['ingredients'] = item[i]['recipe']['ingredientLines']  # list
        recipe['dish_type'] = item[i]['recipe']['dishType'][0]  # string
        data.append(recipe)

    return data


# @app.route('/')
@app.route('/api/home')
def home():
    all_posts = Post.query.all()
    posts_list = [{'id': post.id,
                   'title': post.title,
                   'post_image': post.post_image, }
                  for post in all_posts]

    return jsonify(posts_list)

@app.route('/api/search/', methods=["POST", "GET"])
def search_item():
    post_request = request.json
    print(post_request)

    search_param = post_request.get('title', '').lower()
    print(search_param)

    searched_posts = Post.query.filter(func.lower(Post.title).ilike(f"%{search_param}%")).all()

    response = [{'id': post.id,
                'title': post.title,
                'post_image': post.post_image}
                for post in searched_posts]
    print(response)

    return jsonify(response)


@app.route('/api/home/<int:id>')
def read_more(id):
    post = Post.query.filter_by(id=id).first()
    response = {'id': post.id,
                'title': post.title,
                'date_posted': post.date_posted,
                'post_image': post.post_image,
                'calories': post.calories,
                'totalTime': post.totalTime,
                'ingredients': post.ingredients,
                'type': post.type}
    return jsonify(response)


@app.route('/api/accountSettings', methods=["POST", "GET"])
def account_settings():
    user_id = session.get('user_id')
    print(session)
    if user_id is None:
        return jsonify({'message': 'Unauthorized'}), 401

    user = User.query.filter_by(id=user_id).first()

    if user:
        user_info = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            # 'password': user.password

        }
        return jsonify(user_info)
    else:
        # Handle the case where the user with the stored id does not exist
        return jsonify({'message': 'User not found'}), 404


@app.route('/api/saveAccountChanges', methods=['POST', "GET"])
def saveAccountChanges():
    try:
        new_data = request.json

        user_id = session.get('user_id')
        user = User.query.filter_by(id=user_id).first()

        # print(user)
        if user is None:
            return jsonify({'message': 'User not found'}), 404

        user.username = new_data['username'] if 'username' in new_data and user.username != new_data[
            'username'] else user.username
        db.session.commit()

        # print(user.password)

        # user.password = generate_password_hash(new_data['password']) if 'password' in new_data and user.password != generate_password_hash(
        #     new_data['password']) else user.password
        # db.session.commit()

        updated_user_data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            # 'password': user.password
        }

        # print(updated_user_data['password'])
        return jsonify({'message': 'User updated successfully', 'user': updated_user_data}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
