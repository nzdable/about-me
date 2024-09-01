import React, { useState } from 'react';
import styles from "./Navbar.module.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className={styles.navbar}>
          <a className={styles.title} href="/">
            About Me
          </a>
          <div className={styles.menu}>

            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
            >
              <li>
                <a href="#introparagraph">About</a> {/* Updated href */}
              </li>
              <li>
                <a href="#likesdislikes">Fun Facts</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      );
};

export default Navbar;
