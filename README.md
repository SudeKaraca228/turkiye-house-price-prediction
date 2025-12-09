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
## How to Run the Project

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```
and open index.html using a Live Server extension to run the frontend.

**Live Demo:** https://your-deployed-project-url.com


