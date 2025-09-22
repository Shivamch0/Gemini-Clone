import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../assets/assets";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  const handleExtend = () => {
    setExtended(prev => !prev)
  }

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.top}>
          <img onClick={() => handleExtend()} className={styles.menu} src={assets.menu_icon} alt="" />
          <div className={styles.newChat}>
            <img src={assets.plus_icon} alt="" />
            {extended ? <p>New Chat</p> : null}
          </div>
          {extended?<div className={styles.recent}>
            <p className={styles.recentTitle}>Recent</p>
            <div className={styles.recentEntry}>
              <img src={assets.message_icon} alt="" />
              <p>What is React...</p>
            </div>
          </div> : null}
        </div>

        <div className={styles.bottom}>
          <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Setting</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
