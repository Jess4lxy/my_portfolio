'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  names: string[];
  baseText: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export default function TypingAnimation({ 
  names, 
  baseText, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}: TypingAnimationProps) {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentName = names[currentNameIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing phase
        if (currentText.length < currentName.length) {
          setCurrentText(currentName.slice(0, currentText.length + 1));
        } else {
          // finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // finished deleting, move to next name
          setIsDeleting(false);
          setCurrentNameIndex((prev) => (prev + 1) % names.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentNameIndex, names, typingSpeed, deletingSpeed, pauseTime]);

  // cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {baseText}{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
        {currentText}
      </span>
      <span className={`text-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>
        |
      </span>
    </span>
  );
}
