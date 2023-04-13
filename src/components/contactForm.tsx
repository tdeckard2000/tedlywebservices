import React, { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import styles from "@/styles/ContactForm.module.scss"
import Image from "next/image";
import StatusModalComponent from "./statusModal";

interface Props {
    showCloseIcon: boolean;
    closeCallback?: () => void;
}

interface MessageForm {
    name: string;
    business: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactFormComponent (props: Props) {
    const [showSendingModal, setShowSendingModal] = useState<boolean>(false);
    const [showSentModal, setShowSentModal] = useState<boolean>(false);

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setShowSendingModal(true);
        if(!event.target) return;
        const formData: MessageForm = {
            name: event.target.name.value,
            business: event.target.business.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value
        }
        const response = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        if(response.status === 200) {
            setTimeout(() => {
                setShowSendingModal(false);
                setShowSentModal(true);
            }, 1000)
            setTimeout(() => {
                setShowSentModal(false);
                clearForm(event);
                if(props.closeCallback) {
                    props.closeCallback();
                }
            }, 3000)
        }
    }

    const clearForm = (event: any) => {
        event.target.name.value = "";
        event.target.business.value ="";
        event.target.email.value = "";
        event.target.phone.value = "";
    }

    const onPhoneNumber = (event: any) => {
        if(event.target.value) {
            const value = event.target.value;
            if(event.key !== "Backspace" && (value.length === 3 || value.length === 7)) {
                event.target.value += '-'
            }
        }
    }

    return(
        <div className={styles.main}>
            <span style={{position: "fixed", zIndex: "1500", display: showSendingModal ? "initial" : "none"}}>
                <StatusModalComponent>
                    <p>Sending...</p>
                </StatusModalComponent>
            </span>
            <span style={{position: "fixed", zIndex: "1500", display: showSentModal ? "initial" : "none"}}>
                <StatusModalComponent>
                    <p>Message Sent <Image src="/letterCheck.svg" alt="letter sent icon" width={30} height={30}></Image></p>
                </StatusModalComponent>
            </span>
            <div className={styles.formContainer}>
                <div style={{display: props.showCloseIcon? "block" : "none"}} className={styles.closeIcon}>
                    <Image onClick={props.closeCallback} src="/closeIcon.svg" alt="close button" width={30} height={30}></Image>
                </div>
                <form onSubmit={(data) => onSubmit(data as any)}>
                    <input required placeholder="Name" type="text" id="name" name="name"/>
                    <input required placeholder="Business" type="text" id="business" name="business"/>
                    <input required placeholder="Email Address" type="email" id="email" name="email"/>
                    <input required maxLength={12} onKeyDown={(event) => onPhoneNumber(event as any)} onKeyUp={(event) => onPhoneNumber(event as any)} pattern="^\d+(?:-\d+)*$" placeholder="Phone Number" type="tel" id="phone" name="phone" title="Your phone number cannot contain letters."/>
                    <textarea placeholder="Type your message ..." name="message" id="message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

        </div>
    )
}