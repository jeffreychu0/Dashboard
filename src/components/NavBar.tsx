import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-black text-white flex justify-between items-center p-4 px-8 fixed top-0 left-0 w-full z-50 transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="flex items-center gap-6">
        <h1 className=" text-sm md:text-lg lg:text-xl font-bold">Jeffrey Chu</h1>
      </div>

      <nav className="space-x-4 text-sm md:text-lg">
        <Link
          to="/"
          className="hover:underline"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;