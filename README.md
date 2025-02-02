🌦️ Weather Dashboard

A simple React-based weather dashboard that allows users to search for a city and view real-time weather data. The app fetches weather details using the OpenWeatherMap API and updates automatically every 30 seconds.

🚀 Features
	•	🔍 Search for a city and get live weather data
	•	🌡️ Displays temperature, humidity, wind speed, and weather conditions
	•	🌅 Shows an appropriate weather icon
	•	🔄 Updates automatically every 30 seconds
	•	🛠️ Error handling for invalid city names and network failures
	•	📌 Saves last searched city using local storage
	•	📊 5-day forecast (Bonus feature)
	•	🌍 Switch between Celsius & Fahrenheit
	•	⚡ Uses React Query or SWR for API caching

🛠️ Tech Stack
	•	Frontend: React, React Hooks, Context API
	•	State Management: React Context
	•	Styling: CSS Modules
	•	API Integration: OpenWeatherMap API

🔧 Installation

1️⃣ Clone this repository:

git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard

2️⃣ Install dependencies:

npm install

3️⃣ Create a .env file in the root directory and add your OpenWeatherMap API key:

VITE_API_KEY=your_api_key_here

4️⃣ Start the development server:

npm run dev

🔗 API Used

This project uses the OpenWeatherMap API to fetch weather data:
🔗 https://openweathermap.org/api
