import React, { useState } from 'react';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className='msgForm'>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Mensagem..."
      />
      <button onClick={handleSend}><svg
         fill="none"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         viewBox="0 0 24 24"
         height="1.3em"
         width="1.3em"
       >
         <path d="M3 3l3 9-3 9 19-9zM6 12h16" />
    </svg></button>
    </div>
  );
};

export default Chat;


