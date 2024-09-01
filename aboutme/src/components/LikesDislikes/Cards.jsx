import React from "react";
import styles from "./Cards.module.css";
import { getImageUrl } from "../../utils";

export const Cards = ({ item: { title, description, imageSrc, icon } }) => {
  return (
    <div className={styles.container}>
      {icon && (
        <i className={`fa ${icon} ${styles.icon}`} aria-hidden="true"></i>
      )}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Cards;
