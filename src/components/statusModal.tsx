import React from "react";
import styles from "@/styles/StatusModal.module.scss"

interface Props {
    children: any;
}

export default function StatusModalComponent (props: Props) {
    return(
        <div className={styles.main}>
            {props.children}

            {/* Example
            <span style={{position: "fixed", zIndex: "1500"}}>
                <StatusModalComponent>
                    <p>Sending...</p>
                </StatusModalComponent>
            </span>
             */}
        </div>
    )
}