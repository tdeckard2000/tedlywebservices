import React from "react";
import styles from "@/styles/FormModal.module.scss"
import ContactFormComponent from "./contactForm";

interface Props {
    closeCallback?: () => void;
}

export default function FormModalComponent (props: Props) {
    return(
        <div className={styles.main}>
            <ContactFormComponent
                showCloseIcon={true}
                closeCallback={props.closeCallback}
            ></ContactFormComponent>
        </div>
    )
}