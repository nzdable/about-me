import React from "react";

import styles from "./LikesDislikes.module.css";

import likesdislikes from "../../data/likesdislikes.json";
import { Cards } from "./Cards";

export const LikesDislikes = () => {
  return (
    <section className={styles.container} id="likesdislikes">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.likesdislikes}>
        {likesdislikes.map((likesdislikes, id) => {
          return <Cards key={id} likesdislikes={likesdislikes} />;
        })}
      </div>
    </section>
  );
};

export default LikesDislikes;
