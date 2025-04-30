'use client';

export default function ProjectCard({ title, description, tags }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800 p-6 transition-all hover:bg-gray-700/50 hover:transform hover:scale-105">
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-4 text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="rounded-full bg-gray-900/80 px-3 py-1 text-sm text-blue-400 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
