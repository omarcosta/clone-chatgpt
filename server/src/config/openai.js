//import OpenAI from "openai";
const OpenAI = require("openai")

// Classe openai
module.exports = class openai {
  
  // Metodo  que retorna as configurações
  static configuration(){
    const configuration = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    return new OpenAI(configuration)
  }

  // modelo de objeto do text completion
  static textCompletion({prompt}){
    return {
      model: "gpt-3.5-turbo-instruct",
      prompt: `${prompt}`,
      temperature: 0.4,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }
  }
}