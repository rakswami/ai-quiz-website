import React, { useState } from 'react';
import QuizCard from './QuizCard';

function Chatbot() {
    const [topic, setTopic] = useState('');
    const [quiz, setQuiz] = useState([]);

    const handleSubmit = async () => {
        const response = await fetch('/api/quiz/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic }),
        });

        const data = await response.json();
        if (data.success) {
            setQuiz(data.mcqs);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
            />
            <button onClick={handleSubmit}>Generate Quiz</button>
            {quiz.length > 0 && quiz.map((q, index) => <QuizCard key={index} question={q} />)}
        </div>
    );
}

export default Chatbot;