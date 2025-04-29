export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
