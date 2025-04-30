const express = require('express');
const dotenv = require('dotenv');
const quizRoutes = require('./routes/quizRoutes');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/quiz', quizRoutes);

// Database connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});