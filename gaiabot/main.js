import fs from 'fs/promises';
import fetch from 'node-fetch';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { colors } from './config/colors.js';
import { displayBanner } from './config/banner.js';
import { CountdownTimer } from './config/countdown.js';
import { logger } from './config/logger.js';


const API_CONFIG = {
  GAIA_DOMAIN: 'babycheuk',
  BASE_URL: 'gaia.domains',
  ENDPOINT: '/v1/chat/completions',
  ORIGIN: 'https://www.gaianet.ai',
  REFERER: 'https://www.gaianet.ai/',
  GAIA_API_KEY: process.env.GAIA_API_KEY,  // Pastikan untuk menyimpan API_KEY dengan aman
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,  // Pastikan untuk menyimpan API_KEY dengan aman
};

const generativeAI = new GoogleGenerativeAI({

apiKey: API_CONFIG.GEMINI_API_KEY,
);


async function fetchQuestions() 
  try 
    const response = await fetch('https://raw.githubusercontent.com/winsnip/gaiabot-winsnip/refs/heads/main/keywords.txt');
    if (!response.ok) 
      throw new Error(`Failed to fetch questions:{response.statusText}`);
    }
    const questions = await response.text();
    return questions.split('\n').filter(question => question.trim() !== ''); 
  } catch (error) {
    logger.error(`colors.errorError fetching questions:{error}colors.reset`);
    throw error;
  


async function getGeminiResponse(prompt) 
  try 
    const model = generativeAI.getGenerativeModel( model: 'gemini-1.5-flash' );
    const response = await model.generate(
      inputs: [prompt],
    );

    return response.outputs[0]?.text || ”;
   catch (error) 
    logger.error(`{colors.error}Error in Gemini chat: error{colors.reset}`);
    throw error;
  }
}


async function chatWithGaianet(geminiMessage) {
  try {
    const url = `https://API_CONFIG.BASE_URL{API_CONFIG.ENDPOINT}`;
    const headers = {
      'Content-Type': 'application/json',

const prompt = questions[Math.floor(Math.random() * questions.length)];
    logger.info(`{colors.brightCyan}Gemini (as User): colors.reset{prompt}`);

    
    const geminiMessage = await getGeminiResponse(prompt);
    logger.info(`colors.brightCyanGemini (Response):{colors.reset}geminiMessage`);

    
    const gaianetResponse = await chatWithGaianet(geminiMessage);
    logger.info(`{colors.brightMagenta}Gaianet Assistant: colors.reset{gaianetResponse}`);
  } catch (error) {
    logger.error(`colors.errorError in runBot:{error}${colors.reset}`);
  }
}


displayBanner();


const timer = new CountdownTimer(25); 
timer.start(runBot);
