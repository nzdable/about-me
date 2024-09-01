import React from "react";
import styles from "./LikesDislikes.module.css";
import likesDislikesData from "../../data/likesdislikes.json"; // Ensure this path is correct
import { Cards } from "./Cards";

export const LikesDislikes = () => {
  return (
    <section className={styles.container} id="likesdislikes">
      <h2 className={styles.title}>Fun Facts</h2>
      <div className={styles.cardsContainer}>
        {likesDislikesData.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LikesDislikes;
