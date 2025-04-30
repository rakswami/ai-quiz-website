const express = require('express');
const { generateQuiz } = require('../controllers/quizController');

const router = express.Router();

// Route to generate quiz
router.post('/generate', generateQuiz);

module.exports = router;