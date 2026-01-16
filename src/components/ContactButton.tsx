'use client';
import React, { useState } from 'react';

const ContactButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "senthilcaesar@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`ml-4 text-lg font-medium capitalize underline md:text-base cursor-pointer transition-colors duration-200
        ${copied 
            ? 'text-green-600 dark:text-green-400 no-underline' 
            : 'text-dark dark:text-light'
        }`}
    >
      {copied ? "Email Copied!" : "Contact"}
    </button>
  );
};

export default ContactButton;
