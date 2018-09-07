import * as React from 'react';

const logo = require("../../../public/icon.png");
const styles = require("./styles.css");

export const Header = () => (
  <div className={styles.Header}>
    <img src={logo} className={styles.Logo} alt="logo" />
    <h1>Stoplight Coding Challenge</h1>
  </div>
);
