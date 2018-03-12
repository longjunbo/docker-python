FROM python:3

WORKDIR /usr/src/app

COPY ./requirements.txt .

RUN pip install uwsgi

RUN pip install -r requirements.txt

EXPOSE 8000

CMD [ "uwsgi", "--uwsgi", "0.0.0.0:8000", "--module", "__init__", "--callab", "app", "--py-autoreload", "1" ]
