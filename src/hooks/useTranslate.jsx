import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
import { useState, useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [],
});
function useTranslate({ sourceText, selectedLanguage }) {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleTranslate = async () => {
      try {
        const result =
          await chatSession.sendMessage(`You will be provided with a sentence . The sentence is ${sourceText} and your task is to: 
            -detect the language of the given sentence
            -translate the sentence into ${selectedLanguage}
            do not return anything other than the translated sentence
            `);

        const data = await result.response.text();
        setTargetText(data);
      } catch (error) {
        console.log("Error while translating ", error);
      }
    };

    let timeoutId;
    if (sourceText.trim()) {
      timeoutId = setTimeout(() => {
        handleTranslate();
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [sourceText, selectedLanguage]);

  return targetText;
}

export default useTranslate;
