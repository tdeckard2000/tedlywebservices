import React, { useState } from "react";
import styles from "@/styles/Header.module.scss"
import { Pages } from "@/types/main";
import Image from "next/image";
import Link from "next/link";
import StatusModalComponent from "./statusModal";
import FormModalComponent from "./formModal";

interface Props {
    activePage: Pages;
    linkCallback: Function;
    openMenuCallback: Function;
    menuIsOpen: boolean;
    showFormModal: boolean;
    setShowFormModal: Function;
}

export default function HeaderComponent(props: Props) {

    return (
        <div className={styles.main}>
            <span style={{position: "fixed", zIndex: "2500", display: props.showFormModal ? "initial" : "none"}}>
                <FormModalComponent
                    closeCallback={() => props.setShowFormModal(false)}
                ></FormModalComponent>
            </span>
            <div className={styles.logoContainer}>
                <div className={styles.top}>Tedly</div>
                <div className={styles.bottom}>Web Services</div>
            </div>
            <div className={styles.links}>
                <Link href="/">
                    <button className={props.activePage === 'home'? styles.highlight: ''} onClick={() => props.linkCallback('home')}>Home</button>
                </Link>
                <Link href={"/services"}>
                    <button className={props.activePage === 'services'? styles.highlight: ''} onClick={() => props.linkCallback('services')}>Services</button>
                </Link>
                <Link href={"/about"}>
                    <button className={props.activePage === 'about'? styles.highlight: ''} onClick={() => props.linkCallback('about')}>About</button>
                </Link>
                <Link href={"/contact"}>
                    <button className={props.activePage === 'contact'? styles.highlight: ''} onClick={() => props.linkCallback('contact')}>Contact</button>
                </Link>
            </div>
            <div onClick={() => props.openMenuCallback()} className={styles.menuButton}>
                <Image style={props.menuIsOpen ? {opacity: 0} : {opacity: 1}} src={"menu.svg"} alt="menu icon" height={32} width={32}></Image>
            </div>
        </div>
    )
}