import React from "react";
import styles from "./styles.module.scss";

export const Cards = ({ number, text }) => {
  return (
    <>
      <div className={styles.cards}>
        <span className={styles.cards__number}>{number}</span>
        <p className={styles.cards__paragraph}>{text}</p>
      </div>
    </>
  );
};
