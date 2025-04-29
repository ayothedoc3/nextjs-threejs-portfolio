export default function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-black to-transparent p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">A.A-J</div>
        <nav>
          <ul className="flex space-x-6 text-white">
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
