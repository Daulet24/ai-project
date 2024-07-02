import React from "react";
import styles from "./styles.module.scss";
import Robot from "../../assets/Robot.png";
import { Tabs } from "../../widgets/Tabs";

export const AboutScreen = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about_container}>
          <Tabs
            number="01"
            name="Team"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nesciunt veniam porro placeat. Accusamus, quae deleniti esse, ipsa perspiciatis illum a illo atque, dignissimos reiciendis quis magni doloribus labore itaque?"
          />
          <Tabs
            number="02"
            name="Team"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nesciunt veniam porro placeat. Accusamus, quae deleniti esse, ipsa perspiciatis illum a illo atque, dignissimos reiciendis quis magni doloribus labore itaque?"
          />
          <Tabs
            number="03"
            name="Team"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nesciunt veniam porro placeat. Accusamus, quae deleniti esse, ipsa perspiciatis illum a illo atque, dignissimos reiciendis quis magni doloribus labore itaque?"
          />
        </div>
        <img className={styles.robot} src={Robot} alt="" />
      </div>
    </>
  );
};
