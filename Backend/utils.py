import pandas as pd
import pickle
def prepare_features(data):
    features = {
        "Şehir": [data.city],
        "Net_Metrekare": [data.net_area],
        "Oda_Sayısı": [data.rooms],
        "Banyo_Sayısı": [data.bathrooms],
        "Isıtma_Tipi": [data.heating],
        "Bulunduğu_Kat": [data.floor],
        "Binanın_Kat_Sayısı": [data.total_floors],
        "Binanın_Yaşı": [data.building_age],
        "Kullanım_Durumu": [data.usage_status],
        "Eşya_Durumu": [int(data.furnished)],
        "Yatırıma_Uygunluk": [int(data.investment_suitable)],
        "Takas": [int(data.swap_available)]
    }
    
    df = pd.DataFrame(features)

    expected_order = ['Net_Metrekare', 'Oda_Sayısı', 'Bulunduğu_Kat', 'Binanın_Yaşı', 'Isıtma_Tipi', 'Şehir', 'Binanın_Kat_Sayısı', 'Kullanım_Durumu', 'Banyo_Sayısı']
    df = df[expected_order]
    
    return df
def load_model(model_path):
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    return model