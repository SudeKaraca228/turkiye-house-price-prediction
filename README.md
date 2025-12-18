# turkiye-house-price-prediction
This is a pair-programming project that includes EDA, modeling, backend, and frontend , resulting in an end-to-end machine learning application that predicts house prices in Türkiye.
## Folder Structure 
```bash
turkiye-house-price-prediction
│
├── data/
│   ├── raw/
│   └── processed/
│
├── notebooks/
│   ├── EDA.ipynb                    
│   ├── Cleaning.ipynb                
│   ├── catboost_and_randomforest.ipynb  
│   └── xgboost_linearregression.ipynb   
│
├── model/               
│   └── best_model.pkl                   
│
├── backend/
│   ├── main.py                     
│   ├── requirements.txt            
│   ├── schemas.py                   
│   └── utils.py                     
│
├── frontend/
│   ├── index.html                    
│   ├── style.css
│   └── script.js
│
├── .gitignore
└── README.md               
```


##Data Processing & Engineering

**Smart Imputation:**Instead of basic mean filling, we used IterativeImputer (via Random Forest) to model and predict missing values accurately.

**Outlier Handling:** We filtered for realistic ranges (Price: 1M-20M ₺, Net Area: 50-500 square meters) and applied a Log Transformation to the target variable to normalize the data.

**Feature Selection:** Dropped Gross Area due to high correlation (0.89) with Net Area  and removed Title Deed Status due to >50% missing data.

## Key Findings & Results
```
| Model               | RMSE | MAE  | R2 Score | Train R2 |
|---------------------|------|------|----------|----------|
| Linear Regression   | 0.35 | 0.25 | 0.57     | -        |
| XGBoost (Baseline)  | 0.30 | 0.215| 0.66     | 0.84     |
| XGBoost (Tuned)     | -    | 0.26 | 0.69     | 0.78     |
| CatBoost (Final)    | 0.29 | 0.21 | 0.68     | 74.31    |
```

**Best Model:** CatBoost achieved the best balance of accuracy and generalization (RMSE: 0.29, R2: 0.68).

**Top Predictors:** The primary drivers of price were Net Area (0.54 correlation), Bathroom Count (0.53), and Room Count (0.50)

## How to Run the Project

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```
and open index.html using a Live Server extension to run the frontend.

**Live Demo:** https://turkiyehousepriceprediction.netlify.app
