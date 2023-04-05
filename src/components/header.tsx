import React from "react";
import styles from "@/styles/Header.module.scss"
import { Pages } from "@/types/main";

interface Props {
    activePage: Pages;
    linkCallback: Function;
}

export default function HeaderComponent(props: Props) {
    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <div className={styles.top}>Tedly</div>
                <div className={styles.bottom}>Web Services</div>
            </div>
            <div className={styles.links}>
                <button className={props.activePage === 'home'? styles.highlight: ''} onClick={() => props.linkCallback('home')}>Home</button>
                <button className={props.activePage === 'about'? styles.highlight: ''} onClick={() => props.linkCallback('about')}>About</button>
                <button className={props.activePage === 'services'? styles.highlight: ''} onClick={() => props.linkCallback('services')}>Services</button>
                <button className={props.activePage === 'contact'? styles.highlight: ''} onClick={() => props.linkCallback('contact')}>Contact</button>
            </div>
            <div className={styles.menuButton}>
                <img src="menu.svg" alt="" />
            </div>
        </div>
    )
}