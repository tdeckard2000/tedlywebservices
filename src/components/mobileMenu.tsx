import React from "react";
import styles from "@/styles/MobileMenu.module.scss"
import Image from "next/image";
import Link from "next/link";

interface Props {
    closeCallback: Function;
    menuIsOpen: boolean;
    activePage: string;
    linkCallback: Function;
}

export default function MobileMenuComponent (props: Props) {
    return(
        <div className={props.menuIsOpen ? styles.open : styles.closed}>
            <div onClick={() => props.closeCallback()} className={styles.closeButton}>
                <Image className={styles.closeIcon} height={40} width={40} src="closeIcon.svg" alt="Close Icon"></Image>
            </div>
            <div className={styles.links}>
                <Link href="/">
                    <button className={props.activePage === 'home'? styles.highlight: ''} onClick={() => props.linkCallback('home')}>Home</button>
                </Link>
                <Link href="/services">
                    <button className={props.activePage === 'services'? styles.highlight: ''} onClick={() => props.linkCallback('services')}>Services</button>
                </Link>
                <Link href="/about">
                    <button className={props.activePage === 'about'? styles.highlight: ''} onClick={() => props.linkCallback('about')}>About</button>
                </Link>
                <Link href="/contact">
                    <button className={props.activePage === 'contact'? styles.highlight: ''} onClick={() => props.linkCallback('contact')}>Contact</button>
                </Link>
            </div>
        </div>
    )
}