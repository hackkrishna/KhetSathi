// Import necessary modules
const express = require('express');
const path = require('path');
const cors = require('cors');

// Create the Express application
const app = express();
const port = 3000;

// Middleware setup
// Enable CORS for all routes so your frontend can make requests
app.use(cors());

// Use express.json() to parse incoming JSON payloads
app.use(express.json());

// Serve static files from the same directory as this script.
// This assumes your index.html file is in the same folder as server.js.
app.use(express.static(path.join(__dirname)));

// ----------------------------------------------------------------------
// API Endpoints
// Note: These endpoints use placeholder data. You will need to replace
// this with calls to real external APIs or a database.
// ----------------------------------------------------------------------

// API for weather data
// In a real application, you would use an external API here, like OpenWeatherMap.
app.get('/api/weather', (req, res) => {
    const { place } = req.query;

    // A real API call would look something like this:
    // const apiKey = 'YOUR_WEATHER_API_KEY';
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`;
    // fetch(apiUrl)
    //   .then(response => response.json())
    //   .then(data => res.json(data))
    //   .catch(error => res.status(500).json({ error: 'Failed to fetch weather data' }));

    // For now, we'll return mock data.
    const mockWeatherData = {
        place: place || "Bhubaneswar",
        temperature: `${(24 + Math.floor(Math.random() * 8))}°C`,
        humidity: `${(50 + Math.floor(Math.random() * 30))}%`,
        wind: `${(4 + Math.floor(Math.random() * 10))} km/h`,
        forecast: [
            { day: "Tomorrow", temp: "26°C", hum: "70%" },
            { day: "Day 2", temp: "28°C", hum: "65%" },
            { day: "Day 3", temp: "25°C", hum: "75%" }
        ]
    };
    console.log(`Sending weather data for: ${place}`);
    res.json(mockWeatherData);
});

// API for market prices
// You would integrate with an agricultural market price API here.
app.get('/api/prices', (req, res) => {
    const { crop } = req.query;

    // A real API call would go here.
    // For now, we'll use mock data.
    const basePrices = { wheat: 1850, rice: 1950, maize: 1750 };
    const base = basePrices[crop] || 1800;
    const getRandomOffset = () => Math.floor(Math.random() * 120) - 60;

    const mockPriceData = {
        crop: crop,
        local: `₹${base + getRandomOffset()}/q`,
        avg: `₹${base + 70 + getRandomOffset()}/q`,
        best: `₹${base + 160 + getRandomOffset()}/q`
    };
    console.log(`Sending prices for: ${crop}`);
    res.json(mockPriceData);
});

// API for feedback submissions
// In a real application, you would save this to a database (e.g., MongoDB, Firebase).
app.post('/api/feedback', (req, res) => {
    const feedback = req.body.text;
    if (!feedback) {
        return res.status(400).json({ error: 'Feedback text is required.' });
    }
    // For demonstration, we'll just log the feedback to the console.
    // To save this permanently, you would write code to insert it into a database.
    console.log('Received new feedback:', feedback);
    res.json({ message: 'Feedback received successfully.' });
});

// New mock API endpoint for requesting an OTP
app.post('/api/request-otp', (req, res) => {
    const { phoneNumber } = req.body;
    console.log(`Simulating OTP request for: ${phoneNumber}`);
    // In a real app, you would send an SMS with a real OTP here.
    // For this example, we'll just return a success message.
    if (!phoneNumber) {
        return res.status(400).json({ error: 'Phone number is required.' });
    }
    res.json({ message: 'OTP sent successfully (mock).' });
});

// New mock API endpoint for verifying an OTP and logging in
app.post('/api/verify-otp', (req, res) => {
    const { phoneNumber, otp } = req.body;
    console.log(`Simulating OTP verification for ${phoneNumber} with OTP ${otp}`);
    // In a real app, you would verify the OTP and return a real auth token.
    // For this example, we'll just return a mock token.
    if (!phoneNumber || !otp) {
        return res.status(400).json({ error: 'Phone number and OTP are required.' });
    }
    // A mock token. In a real app, you would use a service like Firebase Auth.
    const mockAuthToken = 'mock-auth-token-12345';
    res.json({ authToken: mockAuthToken, message: 'Login successful (mock).' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log('Serving the frontend from:', path.join(__dirname));
});