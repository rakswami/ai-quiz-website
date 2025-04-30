const { getMCQs } = require('../services/openaiService');

exports.generateQuiz = async (req, res) => {
    const { topic } = req.body;

    if (!topic) {
        return res.status(400).json({ error: 'Topic is required' });
    }

    try {
        const mcqs = await getMCQs(topic);
        res.json({ success: true, mcqs });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
};