import React from "react";
import styles from "@/styles/OneItemSection.module.scss"
import Image from "next/image";

interface Props {
    children: any;
}

export default function OneItemSectionComponent (props: Props) {
    return(
        <div className={styles.main}>
            {props.children}
            
            {/* Example
            <span>
                <h1><span>What</span> We Offer</h1>
                <p>
                    We specialize in web design and development for small businesses across the US.
                    All code is hand-written for optimal performance, helping drive more customers to your website and increased revenue to your business.
                </p>
                <div>
                    <Image src='store.svg' fill alt="Storefront Icon"></Image>
                </div>
            </span> */}

        </div>
    )
}