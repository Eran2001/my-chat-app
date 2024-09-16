import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from '../redux/chatSlice';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

const Chat = () => {
  const [input, setInput] = useState('');
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      dispatch(receiveMessage(message));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const handleSend = () => {
    socket.emit('sendMessage', input);
    dispatch(sendMessage(input));
    setInput('');
  };

  return (
    <div className="chat-container p-4">
      <div className="messages h-64 overflow-auto border p-2">
        {messages.map((msg, index) => (
          <div key={index} className="message p-1">
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        className="border p-2 w-full mt-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 mt-2 w-full"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;