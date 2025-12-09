from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from schemas import HouseInput as PredictionInput, PredictionOutput 
from utils import load_model, prepare_features
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)
model = load_model("../Model/best_model.pkl")

@app.get("/")
def root():
    return {"message": "ML API is running"}

@app.post("/predict", response_model=PredictionOutput)
def predict(data: PredictionInput):
    features = prepare_features(data)
    prediction = model.predict(features)
    real_price = np.expm1(prediction[0])
    
    return {"prediction": float(real_price)}
