import React from "react";
import styles from "@/styles/MobileMenu.module.scss"

interface Props {
    closeCallback: Function
    menuIsOpen: boolean
}

export default function MobileMenuComponent (props: Props) {
    return(
        <div className={props.menuIsOpen ? styles.open : styles.closed}>
            <div onClick={() => props.closeCallback()} className={styles.closeButton}>
                <img src="closeIcon.svg" alt="" />
            </div>
        </div>
    )
}