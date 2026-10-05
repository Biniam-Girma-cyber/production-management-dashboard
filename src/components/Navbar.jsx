import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 font-semibold"
      : "text-gray-600 hover:text-green-700";

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <span className="text-xl font-bold text-gray-900">Nexus Store</span>

      <div className="flex gap-6">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/products" className={navLinkClass}>
          Products
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;