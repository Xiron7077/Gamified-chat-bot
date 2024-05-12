import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getEnvVariable } from './env';

export interface ChatMessage {
  role: 'system' | 'user';
  content: string;
}

interface ChatCompletionRequest {
  model: string;
  messages: ChatMessage[];
}

interface ChatCompletionResponse {
  id: string;
  model: string;
  messages: ChatMessage[];
}

export const getChatCompletions = async (messages: ChatMessage[]): Promise<ChatMessage[]> => {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const apiKey = getEnvVariable('OPENAI_API_KEY');

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not defined in environment variables.');
  }

  const requestData: ChatCompletionRequest = {
    model: 'gpt-3.5-turbo', // Specify the desired model
    messages: messages,
  };

  const config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await axios.post<ChatCompletionResponse>(apiUrl, requestData, config);
    return response.data.messages;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 429) {
        // Handle rate limit error
        console.warn('Rate limit exceeded. Retrying after delay...');
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds before retrying
        return getChatCompletions(messages); // Retry the request
      } else {
        console.error('OpenAI request failed:', axiosError.message);
        throw new Error('Failed to fetch chat completions from OpenAI.');
      }
    } else {
      console.error('Unexpected error occurred:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
};
