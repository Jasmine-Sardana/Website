"""Application settings and configuration"""

from pydantic_settings import BaseSettings, SettingsConfigDict
from dotenv import load_dotenv

class Settings(BaseSettings):
    """Application configuration settings"""
    app_name:str = "Website"
    app_version:str = "1.0.0"
    environment:str = "Development"
    
    database_url:str

    model_config = SettingsConfigDict(
        env_file = ".env",
        extra="ignore",
    ) 

load_dotenv()
settings = Settings()