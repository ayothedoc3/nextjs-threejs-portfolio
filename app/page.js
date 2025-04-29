// app/page.js
'use client';

import { useState } from 'react';
import ThreeScene from '../components/ThreeScene';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const [interactionCount, setInteractionCount] = useState(0);
  
  const handleInteraction = () => {
    setInteractionCount(prev => prev + 1);
  };
  
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <div className="relative h-[70vh] w-full">
        <ThreeScene onInteraction={handleInteraction} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Ayokunle Ademola-John
          </h1>
          <p className="text-xl md:text-2xl mb-8">Full Stack Developer</p>
          <p className="text-sm opacity-80">Click & drag to interact with the 3D scene</p>
          {interactionCount > 0 && (
            <p className="mt-2 text-sm text-purple-400">
              Interactions: {interactionCount}
            </p>
          )}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Next.js", "Nest.js", "Tailwind CSS", "Three.js", "React Three Fiber", "TypeScript", "MongoDB", "PostgreSQL"].map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-lg mb-8">
          Specialized in creating immersive web experiences with Next.js and Three.js,
          backed by robust Nest.js APIs and elegant Tailwind CSS designs.
        </p>
        <a 
          href="#contact" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition"
        >
          Let's Work Together
        </a>
      </section>
      
      <footer className="bg-gray-900 py-8 text-center text-sm opacity-80">
        <p>© {new Date().getFullYear()} Ayokunle Ademola-John. All rights reserved.</p>
      </footer>
    </main>
  );
}