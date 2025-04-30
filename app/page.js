'use client';
import ThreeScene from '@/components/ThreeScene';
import ProjectCard from '@/components/ProjectCard';
import { useInteractionStore } from '@/stores/interactionStore';

const projects = [
  {
    title: 'Interactive 3D Product Viewer',
    description: 'Web-based 3D product configurator with real-time customization',
    tags: ['Three.js', 'React Three Fiber', 'Blender']
  },
  {
    title: '3D Data Visualization Dashboard',
    description: 'Interactive 3D representations of complex datasets',
    tags: ['WebGL', 'D3.js', 'Node.js']
  },
  {
    title: 'Interactive Portfolio Experience',
    description: 'Immersive 3D environment showcasing development projects',
    tags: ['GLSL', 'Physics', 'WebXR']
  }
];

const skills = [
  'Next.js', 'Nest.js', 'Tailwind CSS', 'Three.js',
  'React Three Fiber', 'TypeScript', 'MongoDB', 'PostgreSQL'
];

export default function Home() {
  const interactions = useInteractionStore((state) => state.interactions);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <ThreeScene />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ayokunle Ademola-John
            </h1>
            <h2 className="text-3xl font-medium text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-xl text-gray-400">
              3D Interactions: {interactions}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Featured Projects
        </h2>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Technical Expertise
        </h2>
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
