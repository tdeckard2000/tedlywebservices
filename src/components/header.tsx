import React from "react";
import styles from "@/styles/Header.module.scss"

export default function HeaderComponent() {
    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <div className={styles.top}>Tedly</div>
                <div className={styles.bottom}>Web Services</div>
            </div>
            <div className={styles.links}>
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Contact</button>
            </div>
            <div className={styles.menuButton}>
                <img src="menu.svg" alt="" />
            </div>
        </div>
    )
}