import React from "react";
import styles from "./About.module.css";
import hdPicture from '../../assets/Navbar/hd-picture.png';


export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anon</h1>
        <p className={styles.description}>
          I'm a 3rd Year BS Computer Science Student and an aspiring full-stack developer.
        </p>
      </div>
      <img src={hdPicture} alt="description" className={styles.aboutImage} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default About;
