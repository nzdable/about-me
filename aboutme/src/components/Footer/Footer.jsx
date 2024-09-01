import React from "react";
import styles from "./Footer.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <br />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <i className="fab fa-linkedin"></i> 
          <a href="https://www.linkedin.com/in/myname" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <i className="fab fa-instagram"></i> 
          <a href="https://www.instagram.com/necssss/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
        </li>
        <li className={styles.link}>
          <i className="fab fa-facebook"></i> 
          <a href="https://www.facebook.com/nica.dable1" target="_blank" rel="noopener noreferrer">Facebook</a>
        </li>
      </ul>
      <div className={styles.blurBackground}></div>
    </footer>
  );
};

export default Footer;
