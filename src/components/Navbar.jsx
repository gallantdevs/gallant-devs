import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = ["About", "Services", "Work", "Blog", "Contact"];

const NavBar = () => {
  // Refs for navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMobileOpen, setIsMobileOpen] = useState(false);


  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="border-none fixed inset-x-0 top-4 z-50 h-16  transition-all duration-700 sm:inset-x-6"
    >
      <header className=" absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Branding */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/logo.png" alt="logo" className="w-8" />
            <h1 className="logo font-semibold text-lg uppercase text-[#C69C49]">
              Gallant Devs
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative ms-10 text-xs uppercase text-white  after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-[#C69C49] transition-transform ${
                isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#C69C49] transition-opacity ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#C69C49] transition-transform ${
                isMobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

        </nav>
      </header>
      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-20 inset-x-0 w-full  bg-black/90 backdrop-blur-md transition-all duration-500 ${
          isMobileOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileOpen(false)}
              className="text-md uppercase text-white tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default NavBar;
