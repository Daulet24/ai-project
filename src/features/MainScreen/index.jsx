import React from "react";
import styles from "./styles.module.scss";
import vectary from "../../assets/vectary.png";
import { Button } from "../../shared/Button/index";
import { IconButton } from "../../shared/IconButton/index";

export const MainScreen = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main_container}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <h4>
            <br />
            <span className={styles.color_text}>38%</span> sit amet consectetur
            adipisicing elit.
          </h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            delectus, adipisci commodi consequatur nesciunt corrupti
            consequuntur? Quidem fugiat id doloremque quasi quaerat.
          </p>
          <div className={styles.buttons}>
            <Button text="Learn more" type="button" />
            <IconButton text="Discover me" type="transparent" />
          </div>
        </div>
        <img className={styles.vectary} src={vectary} alt="image" />
      </div>
    </>
  );
};
