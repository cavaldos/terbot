import readline from "readline";

import Groq from "groq-sdk";
const apiKey = "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";
const groq = new Groq({ apiKey: apiKey });

async function translateToVietnamese(text: string) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that translates English text into concise Vietnamese. Please translate the following English text into short and concise Vietnamese.",
      },
      {
        role: "user",
        content: `Translate the following text to Vietnamese in a concise manner:\n\n${text}`,
      },
    ],
    model: "llama3-8b-8192",
    max_tokens: 60,
  });

  return (
    chatCompletion.choices[0]?.message?.content || "Translation not available."
  );
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter English text: ", async (input) => {
  const translation = await translateToVietnamese(input);
  console.log(`Vietnamese translation: ${translation}`);
  rl.close();
});

export default translateToVietnamese;
