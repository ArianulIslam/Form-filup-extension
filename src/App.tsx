import React from 'react';
import { Send } from 'lucide-react';

function App() {
  const handleFillForm = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id!, { action: "fillForm" });
    });
  };

  return (
    <div className="w-64 p-4 bg-white">
      <h1 className="text-xl font-bold mb-4">Contact Form Filler</h1>
      <button
        onClick={handleFillForm}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      >
        <Send className="mr-2" size={18} />
        Fill Form
      </button>
    </div>
  );
}

export default App;