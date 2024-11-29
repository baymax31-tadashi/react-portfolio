import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
      {/* Logo Section */}
      <div className="flex items-center">
      <img className="mx-2 h-10 w-auto" src={logo} alt="Logo" />

      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-6 text-2xl text-white">
        <a
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="hover:text-gray-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="hover:text-gray-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter"
          className="hover:text-gray-300"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
