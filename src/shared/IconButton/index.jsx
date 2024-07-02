import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Импорт иконки из правильного модуля

export const IconButton = ({ text }) => {
  return (
    <button
      className={styles.icon_button}
      onClick={() => console.log(buttonType)}
    >
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};
