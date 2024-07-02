import React from "react";
import styles from "./styles.module.scss";

export const Button = ({ text, type }) => {
  const buttonType = `${
    type === "transparent" ? styles.transparent : styles.button
  }`;

  return (
    <button className={buttonType} onClick={() => console.log(buttonType)}>
      {text}
    </button>
  );
};
