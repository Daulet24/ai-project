import React from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/logo.png";
import { NavLink } from "../../shared/NavLink";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.footer__container}>
        <img className={styles.logo} src={Logo} alt="image" />
        <div className={styles.footer__links}>
          <NavLink text="Main" />
          <NavLink text="About" />
          <NavLink text="Team" />
          <NavLink text="Contacts" />
        </div>
      </div>
    </footer>
  );
};
