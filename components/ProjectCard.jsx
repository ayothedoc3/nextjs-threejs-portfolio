// app/page.js

// Mark the component as a Client Component because it uses hooks (useState) and event handlers
'use client';

import { useState } from 'react';
import ThreeScene from '../components/ThreeScene'; // Import the 3D scene component
import Header from '../components/Header';         // Import the header component
import ProjectCard from '../components/ProjectCard'; // Import the project card component

/**
 * The main page component for the portfolio.
 * Integrates the Header, ThreeScene, ProjectCards, Skills, and Contact sections.
 */
export default function Home() {
  // State to track the number of interactions with the 3D scene
  const [interactionCount, setInteractionCount] = useState(0);

  /**
   * Handles interaction events from the ThreeScene component.
   * Increments the interaction counter.
   */
  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
  };

  // Array of project data to be displayed
  const projects = [
    {
      title: "Interactive 3D Product Viewer",
      description: "A customizable 3D product viewer with zoom, rotate, and color change capabilities built with Next.js and React Three Fiber.",
      tags: ["Next.js", "Three.js", "React Three Fiber", "E-commerce"]
    },
    {
      title: "3D Data Visualization Dashboard",
      description: "Real-time 3D visualization of complex datasets with interactive controls and animations.",
      tags: ["Next.js", "Three.js", "Data Visualization", "REST API"]
    },
    {
      title: "Interactive Portfolio Experience",
      description: "A fully 3D interactive portfolio showcasing web development projects with immersive navigation.",
      tags: ["Next.js", "Three.js", "React Three Fiber", "UI/UX"]
    }
  ];

  // Array of technical skills to be displayed
  const skills = [
    "Next.js", "Nest.js", "Tailwind CSS", "Three.js", "React Three Fiber",
    "TypeScript", "MongoDB", "PostgreSQL"
  ];

  return (
    // Main container with a minimum height of the screen and a background gradient
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Render the Header component */}
      <Header />

      {/* Home section (Hero) */}
      {/* This section contains the main 3D scene and introductory text */}
      <div id="home" className="relative h-screen w-full flex items-center justify-center">
        {/* Container for the 3D scene, positioned absolutely to fill the section */}
        <div className="absolute inset-0">
          {/* Render the ThreeScene component, passing the interaction handler */}
          <ThreeScene onInteraction={handleInteraction} />
        </div>
        {/* Text content overlayed on the 3D scene */}
        <div className="text-center z-10 pointer-events-none"> {/* pointer-events-none allows interaction with the canvas behind */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Ayokunle Ademola-John
          </h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <p className="text-sm opacity-80">Click & drag to interact with the 3D scene</p>
          {/* Display interaction count if greater than 0 */}
          {interactionCount > 0 && (
            <p className="mt-2 text-sm text-purple-400">
              Interactions: {interactionCount}
            </p>
          )}
        </div>
      </div>

      {/* Projects section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        {/* Grid layout for project cards, responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through the projects array and render a ProjectCard for each */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
        {/* Flex container for skill tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {/* Map through the skills array and render each skill */}
          {skills.map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-lg mb-8">
          Specialized in creating immersive web experiences with Next.js and Three.js,
          backed by robust Nest.js APIs and elegant Tailwind CSS designs.
        </p>
      </section>

      {/* Contact section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg mb-8">
          Interested in working together? I'm available for freelance projects and full-time opportunities.
        </p>
        {/* Mailto link styled as a button */}
        <a
           href="mailto:contact@ayokunleaj.dev"
           className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
        >
          Let's Work Together
        </a>
      </section>

      {/* Footer section */}
      <footer className="bg-gray-900 py-8 text-center text-sm opacity-80">
        {/* Dynamically generate the current year */}
        <p>© {new Date().getFullYear()} Ayokunle Ademola-John. All rights reserved.</p>
      </footer>
    </main>
  );
}
