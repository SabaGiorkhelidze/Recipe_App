from backend import app
from backend import db
from backend.models import User, Post
from backend.routes import set_db_posts


if __name__ == '__main__':
    with app.app_context():
        # db.create_all()

        '''delete all the test posts'''
        # db.session.query(Post).delete()
        # db.session.commit()

        ''' added sample posts '''
        # items = set_db_posts()
        # user = User.query.filter_by(username='saba').first()
        # for item in items:
        #     existing_post = Post.query.filter_by(title=item['title']).first()
        #
        #     if not existing_post:
        #         info = Post(title=item['title'], post_image=item['img'], ingredients=item['ingredients'],
        #                     calories=item['calories'], totalTime=item['totalTime'],
        #                     type=item['dish_type'], author=user)
        #
        #         db.session.add(info)
        #         db.session.commit()
        app.run(debug=True)
