import React, { SyntheticEvent, useEffect } from "react";
import styles from "@/styles/ContactForm.module.scss"
import Image from "next/image";

interface Props {
    // children: any;
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
                <form action="">
                    {/* <label htmlFor="name">Name</label> */}
                    <input required placeholder="Name" type="text" id="name" name="name"/>
                    <input required placeholder="Business" type="text" id="business" name="business"/>
                    <input required placeholder="Email Address" type="email" id="email" name="email"/>
                    <input required maxLength={12} onKeyUp={(event) => onPhoneNumber(event as any)} pattern="^\d+(?:-\d+)*$" placeholder="Phone Number" type="tel" id="phone" name="phone" title="Your phone number cannot contain letters."/>
                    <textarea placeholder="Type your message ..." name="message" id="message"></textarea>
                    <button>Send</button>
                </form>
            </div>

        </div>
    )
}