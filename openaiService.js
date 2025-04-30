const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.getMCQs = async (topic) => {
    const prompt = `Generate a multiple-choice quiz on the topic "${topic}". Provide options and indicate the correct answer.`;

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 500,
    });

    return JSON.parse(response.data.choices[0].text.trim());
};