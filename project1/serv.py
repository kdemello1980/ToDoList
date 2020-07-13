import os
import sys
from flask import Flask, request, render_template
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
import simplejson as json

app = Flask(__name__)
CORS(app)

engine = create_engine("postgresql://postgres:postgres@localhost:5432/zip_codes")
db = scoped_session(sessionmaker(bind=engine))

@app.route("/cities")
def getCities():
    query = db.execute("SELECT * FROM zip_codes ORDER BY state ASC")
    return json.dumps([dict(r) for r in query])
