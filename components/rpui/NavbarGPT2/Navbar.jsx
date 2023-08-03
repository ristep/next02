"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ logo, links, menuItems }) => {
   const [menuOpen, setMenuOpen] = useState(false);

   const handleMenuToggle = () => {
      setMenuOpen((prev) => !prev);
   };

   return (
      <nav className="navbar">
         <div className="logo">
            <Image src={logo} alt="Logo" />
         </div>
         <div
            className={`menuIcon ${menuOpen ? "open" : ""}`}
            onClick={handleMenuToggle}
         >
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
         </div>
         <ul className={`menu ${menuOpen ? "open" : ""}`}>
            {links.map((link) => (
               <li key={link.id}>
                  <Link href={link.url}>
                     <a>{link.title}</a>
                  </Link>
               </li>
            ))}
            {menuItems.map((item) => (
               <li key={item.id}>
                  <a href={item.url}>{item.title}</a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;
