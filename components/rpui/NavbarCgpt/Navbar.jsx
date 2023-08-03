"use client"
import React, { useState } from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className={styles.navbar}>
         <div className={styles.logo}>Your Logo</div>
         <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
         </div>
         <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <li>
               <a href="/">Home</a>
            </li>
            <li>
               <a href="/about">About</a>
            </li>
            <li>
               <a href="/contact">Contact</a>
            </li>
            <li>
               <a href="/lambi">Lambi</a>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
