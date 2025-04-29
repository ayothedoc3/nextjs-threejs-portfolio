// components/Header.jsx

// Mark the component as a Client Component
'use client';

import React from 'react';

/**
 * Header component for the portfolio.
 * Provides navigation links that scroll smoothly to different sections of the page.
 */
export default function Header() {
  /**
   * Scrolls the page smoothly to the element with the specified ID.
   * @param {string} id - The ID of the element to scroll to.
   */
  const scrollToSection = (id) => {
    // Find the target element by its ID
    const element = document.getElementById(id);
    // If the element exists, scroll to it smoothly
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Header element fixed to the top, full width, with high z-index
    // Background gradient from black to transparent for a subtle effect
    <header className="fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-black to-transparent p-4">
      {/* Container to center content and limit width */}
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Site title/logo */}
        <div className="text-xl font-bold text-white">A.A-J</div>
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-6 text-white">
            {/* Navigation links as buttons for accessibility and clear interaction */}
            <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Home</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition">Projects</button></li>
            <li><button onClick={() => scrollToSection('skills')} className="hover:text-blue-400 transition">Skills</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition">Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
