import React from "react";
import styles from "./Main.module.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.nav}>
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className={styles.mainContainer}>
          <div className={styles.greet}>
            <p><span>Hello Dev...</span></p>
            <p>How can I help you...</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className={styles.card}>
              <p>Briefly summarize the concept: urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className={styles.card}>
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className={styles.card}>
              <p>Improve the readability of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>

          <div className={styles.mainBottom}>
            <div className={styles.searchbox}>
              <input type="text" placeholder="Enter your Prompt here"/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className={styles.bottomInfo}>
            Gemini may display inaccurate info , including about people , so double check its response.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Main;
