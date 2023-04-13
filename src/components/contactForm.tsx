import React, { FormEvent, SyntheticEvent, useEffect } from "react";
import styles from "@/styles/ContactForm.module.scss"
import Image from "next/image";

interface Props {
    // children: any;
}

interface MessageForm {
    name: string;
    business: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactFormComponent (props: Props) {

    
    // useEffect(() => {
    //     if(!tele) return
    //     tele.addEventListener('keyup', function(e){
    //         console.log("boom")
    //         //@ts-ignore
    //       if (event?.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
    //       tele.innerHTML += '-';
    //       }
    //     });
    // })

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if(!event.target) return;
        console.log("target: ", event.target.name.value)
        // const value = event.target.value;
        const formData: MessageForm = {
            name: event.target.name.value,
            business: event.target.business.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value
        }
        console.log(formData)
        const response = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        console.log("response, ", response)
    }

    const onPhoneNumber = (event: KeyboardEvent) => {
        const input: HTMLInputElement | null = document.querySelector('#phone');
        if(input) {
            const value = input.value;
            if(event.key !== "Backspace" && (value.length === 3 || value.length === 7)) {
                console.log(event.key)
                input.value += '-'
            }
        }
    }

    return(
        <div className={styles.main}>
            <div className={styles.formContainer}>
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