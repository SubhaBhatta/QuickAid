import React, { useState, useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [
      ...prev,
      userMessage,
      { sender: "bot", text: "Typing..." },
    ]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are a certified first aid assistant. Respond with helpful and calm instructions for the user's concern.\n\nUser Query: "${input}"`,
      });

      const botReply = response.text || "No response received.";
      setMessages((prev) => {
        const updated = [...prev];
        updated.pop(); // Remove "Typing..."
        return [...updated, { sender: "bot", text: botReply }];
      });
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated.pop(); // Remove "Typing..."
        return [
          ...updated,
          { sender: "bot", text: "⚠️ Error occurred while responding." },
        ];
      });
    }

    setInput("");
    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 py-6 bg-white shadow-xl rounded-2xl border">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-600 flex items-center justify-center gap-2">
        🩺 First Aid ChatBot
      </h1>

      <div className="h-80 overflow-y-auto space-y-2 px-2 pb-2 bg-gray-100 rounded-xl">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-green-200 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex mt-4 gap-2">
        <input
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your first aid concern..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={isLoading}
        />
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition"
          onClick={sendMessage}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Ask"}
        </button>
      </div>

      <p className="mt-4 text-xs text-center text-gray-500">
        🚨 This is not a substitute for emergency services. Dial{" "}
        <strong>100</strong> in urgent situations.
      </p>
    </div>
  );
};

export default ChatBot;
