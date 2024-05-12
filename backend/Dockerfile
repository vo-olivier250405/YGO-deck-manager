FROM python:3.10-slim

ENV PYTHONUNBUFFERED 1

WORKDIR /backend

COPY requirements.txt /backend/
RUN pip install -r requirements.txt

COPY . /backend/

RUN python3 manage.py makemigrations
RUN  python3 manage.py migrate