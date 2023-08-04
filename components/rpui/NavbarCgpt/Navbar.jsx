"use client"
import React, { useState } from 'react';
import Link from "next/link";
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = ({ logo, links, menuItems }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className={styles.navbar}>

         <Link className={styles.logo} href="/" >
            <Image src={logo} alt="Logo" width={32} height={32}/>
         </Link>

         <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
         </div> 

         <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            {links.map((link) => (
               <li key={link.id}>
                  <Link href={link.url}>
                     {link.title}
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
