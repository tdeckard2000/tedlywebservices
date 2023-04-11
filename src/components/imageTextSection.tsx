import React from "react";
import styles from "@/styles/ImageTextSection.module.scss"
import Image from "next/image";

interface Props {
    children: any;
}

export default function ImageTextSectionComponent (props: Props) {
    return(
        <div className={styles.main}>
            {/* {props.children} */}
            
            <div className={styles.imageContainer}>
                <Image src='/funLaptop.jpg' alt="laptop on white background" fill></Image>
            </div>
            <div className={styles.textContainer}>
                <h1><span>$500</span> down. <span>$160</span> Per Month. <br></br>6 Month Minimum Contract.</h1>
                <p>We keep it simple. No hidden fees or surprises. $500 down for a standard 4 page small business website.</p>
                <p>Cancel anytime with no fees or hassles.</p>
            </div>
        </div>
    )
}