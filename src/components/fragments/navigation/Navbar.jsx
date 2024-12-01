import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener saat komponen unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 py-4 px-[5%] shadow-md z-50 bg-white transition-all duration-200 lg:px-32 ${
        isScrolled ? 'bg-opacity-40 backdrop-blur-sm' : ''
      }`}
    >
      {/* desktop */}
      <NavbarDesktop isScrolled={isScrolled} />

      {/* mobile */}
      <NavbarMobile handleSidebarOpen={handleSidebarOpen} />

      {/* sidebar */}
      <Sidebar isActive={isSidebarOpen} />
    </header>
  );
};

const NavbarDesktop = ({ isScrolled }) => {
  return (
    <nav className="hidden justify-between items-center sm:flex">
      <h1
        className={`text-lg  font-bold transition-all hover:text-hover ${
          isScrolled ? 'text-secondary' : 'text-primary'
        }`}
      >
        <a href="/">Coconut Sweet</a>
      </h1>
      <div className="flex items-center gap-2">
        <a
          href="#beranda"
          className="link-navigation text-sm font-semibold hover:after:scale-x-50"
        >
          Beranda
        </a>
        <a
          href="#tentang"
          className="link-navigation text-sm font-semibold hover:after:scale-x-50"
        >
          Tentang
        </a>
        <a
          href="#produk"
          className="link-navigation text-sm font-semibold hover:after:scale-x-50"
        >
          Produk
        </a>
      </div>
    </nav>
  );
};

const NavbarMobile = ({ handleSidebarOpen }) => {
  return (
    <nav className="flex justify-between items-center sm:hidden">
      <h1 className="text-lg text-primary font-bold transition-all hover:text-hover">
        <a href="/">Coconut Sweet</a>
      </h1>
      <div className="flex cursor-pointer">
        <FiMenu onClick={handleSidebarOpen} className="text-lg" />
      </div>
    </nav>
  );
};

const Sidebar = ({ isActive }) => {
  return (
    <aside
      className={`absolute top-full bg-white w-[200px] h-screen shadow-md p-4 transition-all sm:hidden ${
        isActive ? 'right-0' : '-right-full'
      }`}
    >
      <div className="flex flex-col px-2 gap-2">
        <a
          href="#beranda"
          className="link-navigation text-sm font-semibold hover:after:scale-x-[0.3]"
        >
          Beranda
        </a>
        <a
          href="#tentang"
          className="link-navigation text-sm font-semibold hover:after:scale-x-[0.3]"
        >
          Tentang
        </a>
        <a
          href="#produk"
          className="link-navigation text-sm font-semibold hover:after:scale-x-[0.3]"
        >
          Produk
        </a>
      </div>
    </aside>
  );
};

export default Navbar;
