
import { GoogleGenAI } from "@google/genai";
import { Product } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll throw an error if the key is missing.
  console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateProductPitch = async (product: Product): Promise<string> => {
    if (!API_KEY) {
        return Promise.resolve("AI features are disabled. Please configure an API Key.");
    }

  try {
    const prompt = `Generate a short, exciting, and persuasive TikTok-style product pitch for the following product: "${product.name}".
    Here's a short description: "${product.description}".
    Keep it under 40 words, use at least 3 relevant emojis, and make it sound like a viral TikTok video caption. Don't use hashtags.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error generating product pitch:", error);
    return "Couldn't generate an AI pitch right now. Try again later!";
  }
};
