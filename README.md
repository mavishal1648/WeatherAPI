
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

🧠 Approach

To build this Weather Dashboard, I followed a structured approach to ensure that each feature was implemented systematically and effectively:
	1.	Understanding the Problem:
The first step was to thoroughly understand the problem by defining the core requirements of the app, such as fetching real-time weather data, displaying essential weather details, and ensuring that the data is refreshed periodically.
	2.	Reading the Documentation:
I reviewed the OpenWeatherMap API documentation to understand the available endpoints and how to use them effectively. This helped me plan how to structure the API calls and identify the necessary parameters, including the required API key for authentication.
	3.	Applying My Knowledge:
With the problem well-understood and the documentation in hand, I started building the app by applying my knowledge of React, React Hooks, and Context API for state management. I also used CSS Modules to ensure clean, modular styling.
	•	I first focused on implementing the search functionality by using the OpenWeatherMap API to fetch data based on the city entered by the user.
	•	I then added real-time updates by setting an interval to automatically refresh the weather data every 30 seconds.
	•	Error handling was implemented for edge cases such as invalid city names or network issues.
	•	To improve the user experience, I included a feature that saves the last searched city using local storage.
	•	For the 5-day forecast, I utilized a separate API endpoint and displayed the data in a compact and user-friendly manner.
	4.	Iterative Testing and Refinement:
Throughout development, I continuously tested the app to ensure all features worked as expected and refined the UI/UX for better accessibility and performance.

Final Verdict:
The documentation helped me a lot in understanding how to use the API and implement the necessary features effectively. It was an essential resource throughout the development process.
