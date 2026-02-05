# ♻️ SahiBin — Smart Waste Detection & Disposal System

SahiBin is an AI-powered smart waste management platform that helps users **identify waste types and find the correct disposal locations nearby**.

It combines **Machine Learning + Maps + Location Services + Interactive UI** to make responsible waste disposal simple, fast, and accessible.

---

## 🚀 Problem

Many people want to dispose waste responsibly but struggle with:
- Not knowing what type of waste they have
- Confusion about how to dispose it
- Difficulty finding nearby collection centers

This leads to improper disposal and environmental damage.

---

## 💡 Solution - SahiBin

SahiBin solves this by:

1️⃣ Detecting waste using an ML model  
2️⃣ Classifying the material with high confidence  
3️⃣ Suggesting correct disposal methods  
4️⃣ Showing nearby collection centers on an interactive map  
5️⃣ Providing directions instantly  

All in one clean web app.

---

## ✨ Features

✅ Waste image detection using Machine Learning  
✅ Confidence score prediction  
✅ Nearby collection centers (location based)  
✅ Interactive custom map with markers  
✅ Search radius filter  
✅ Material-based filtering  
✅ Collection center list view  
✅ Directions with Google Maps integration  
✅ Responsive UI (mobile + desktop)  
✅ Fast API integration  

---

## 🧠 Tech Stack

### Frontend
- React + TypeScript  
- Tailwind CSS  
- Framer Motion  
- Lucide Icons  

### Backend
- **FastAPI (main.py)**  
- REST APIs  
- Hosted on Render  

### Machine Learning
- **YOLOv8n (custom trained)**  
- Waste type detection  

### Maps & Location
- Geopy + Nominatim  
- Google Maps API  

---

## 🛠️ Installation

### Backend
```
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```
### Frontend
```
cd frontend
npm install
npm run dev
```
---

## 📸 Demo

🎥 Demo Video:  
https://youtu.be/ZXYFO8OPWuE

🌐 Live App: 
https://aisahibin.netlify.app/

💻 GitHub Repository:  
https://github.com/Aradhays07/SahiBin-AI.git

---
