import React from "react";
import styles from "./styles.module.scss";

export const Tabs = ({ text, name, number }) => {
  return (
    <>
      <div className={styles.tab}>
        <span className={styles.tab__number}>{number}</span>
        <div className={styles.tab__text}>
          <span className={styles.tab__name}>{name}</span>
          <p className={styles.tab__paragraph}>{text}</p>
        </div>
      </div>
    </>
  );
};
