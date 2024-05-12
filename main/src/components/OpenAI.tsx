'use client'

import React, { useState } from 'react';
import { getChatCompletions, ChatMessage } from '@/utils/openai';

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleSendMessage = async (content: string) => {
    const newMessage: ChatMessage = { role: 'user', content };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    try {
      const completions = await getChatCompletions(updatedMessages);
      const responseMessage = completions[completions.length - 1]?.content;
      if (responseMessage) {
        const systemMessage: ChatMessage = { role: 'system', content: responseMessage };
        setMessages([...updatedMessages, systemMessage]);
      }
    } catch (error : any) {
      console.error('Error fetching chat completions:', error.message);
    }
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index} className={message.role === 'user' ? 'user-message' : 'system-message'}>
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
            handleSendMessage(e.currentTarget.value.trim());
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default ChatPage;
