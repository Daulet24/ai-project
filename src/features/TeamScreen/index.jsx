import React from "react";
import { Cards } from "../../entities/Cards";
import { Button } from "../../shared/Button";
import styles from "./styles.module.scss";

export const TeamScreen = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__text}>
          <span>
            <a href="">Job Statistics</a>
          </span>
          <span>
            <a href="">See all</a>
          </span>
        </div>
        <div className={styles.card__container}>
          <Cards number="2000" text="Employers" />
          <Cards number="98k$" text="Average Salary" />
          <Cards number="100" text="Free Vacancies" />
        </div>
      </div>
      <div className={styles.team__btn}>
        <Button text="Become a member" type="button" />
      </div>
    </>
  );
};
