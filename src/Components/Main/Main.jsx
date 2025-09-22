import React from 'react';
import styles from "./Main.module.css";
import { assets } from '../../assets/assets';

function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.nav}>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
      </div>
    </>
  )
}

export default Main
