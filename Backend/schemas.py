from pydantic import BaseModel

class HouseInput(BaseModel):
    city: str
    net_area: float
    rooms: float
    bathrooms: int
    heating: str
    floor: str              
    total_floors: int
    building_age: int
    usage_status: str
    furnished: bool
    investment_suitable: bool
    swap_available: bool

    class Config:
        # This gives FastAPI an example to show in the automatic docs
        json_schema_extra = {
            "example": {
                "city": "Istanbul",
                "net_area": 120.5,
                "rooms": 3.0,
                "bathrooms": 2,
                "heating": "Kombi Doğalgaz",
                "floor": "3.Kat",
                "total_floors": 10,
                "building_age": 5,
                "usage_status": "Boş (Empty)",
                "furnished": True,
                "investment_suitable": True,
                "swap_available": False
            }
        }
class PredictionOutput(BaseModel):
    prediction: float 