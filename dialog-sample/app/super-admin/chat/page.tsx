"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hey there 👋, how can I help you today?" },
    { id: 2, sender: "user", text: "I’d like to know more about Dialog App." },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { id: Date.now(), sender: "user", text: input.trim() };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot reply
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: " মোর শালরপুট",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br p-6">
      <motion.div
        className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col h-[600px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b border-white/20 pb-2">
          <h2 className="text-white font-semibold text-xl">Company Chat 💬</h2>
          <span className="text-green-400 text-sm">Online</span>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-3 p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Avatar */}
              {msg.sender === "bot" && (
                <img
                  src="/zubu.jpg"
                  alt="Bot"
                  width={16}
                  height={16}
                  sizes="(max-width:32px"
                  className="w-12 h-12 rounded-full border border-gray-500"
                />
              )}

              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-pink-300 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              className="flex items-end gap-2 justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <img
                src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=AI"
                alt="Bot typing"
                className="w-8 h-8 rounded-full border border-gray-500"
              />
              <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl">
                <span className="animate-pulse">Typing...</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={sendMessage} className="flex gap-2 mt-3">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-xl bg-black/20 text-black placeholder-gray-300 focus:outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-pink-300 text-white rounded-xl hover:bg-pink-400"
          >
            Send
          </button>
        </form>
      </motion.div>
    </main>
  );
}
