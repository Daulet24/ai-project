import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "../../shared/NavLink";
import styles from "./styles.module.scss";
import { Button } from "../../shared/Button/index";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="image" />
        <NavLink href="a" text="Main" className={styles.NavLinks} />
        <NavLink href="a" text="About Us" className={styles.NavLinks} />
        <NavLink href="a" text="Team" className={styles.NavLinks} />
        <NavLink href="a" text="Contacts" className={styles.NavLinks} />
        <Button text="Become a member" className={styles.button} />
      </header>
    </>
  );
};
