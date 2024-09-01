import React from "react";
import styles from "./IntroParagraph.module.css";

const IntroParagraph = () => {
  return (
    <section className={styles.container} id="introparagraph">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Full Name</h3>
              <p>Nica Zoe A. Dable</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>3rd Year - Bachelor of Science in Computer Science</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Birthday</h3>
              <p>November 16, 200X</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>Reading, Watching Movies, Volunteering, Exploring Technology</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroParagraph;
