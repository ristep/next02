import React from "react";
import Link from "next/link";
import './Navbar.scss';

const Navbar = ({ logo, links }) => {
   return (
      <nav className="navbar">
            {/* <div className="logo">
               <img src={logo} alt="Logo" />
            </div> */}

            <ul className="nav-links">
               {links.map((link) => (
                  <li key={link.id}>
                     <Link href={link.url}>
                        {link.title}
                     </Link>
                  </li>
               ))}
            </ul>
      </nav>
   );
};

export default Navbar;
