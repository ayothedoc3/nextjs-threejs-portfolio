// components/Header.jsx
export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-10 bg-gradient-to-b from-black to-transparent p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">A.A-J</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Skills</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }