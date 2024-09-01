import React from "react";
import styles from "./About.module.css";
import hdPicture from '../../assets/Navbar/hd-picture.png';

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nica</h1>
        <p className={styles.description}>
          I am a 3rd Year BS Computer Science Student and an aspiring full-stack developer.  My journey in the tech world began with a fascination for technology and its potential to solve real-world problems.
        
        </p>

        <p className={styles.description}>
        I am currently focused on honing my skills in full-stack development to create impactful and innovative solutions.
        </p>
      </div>
      <img src={hdPicture} alt="description" className={styles.aboutImage} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default About;
