
'use client';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true);
  
  const phoneNumber = "+447367067827";
  const message = "Hello! I'm interested in your scrap metal trading services.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer group"
          title="Chat with us on WhatsApp"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="ri-whatsapp-fill text-2xl"></i>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              Chat on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </button>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs cursor-pointer"
          title="Hide WhatsApp chat"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
}
