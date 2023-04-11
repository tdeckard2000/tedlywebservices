import React from "react";
import styles from "@/styles/ThreeItemSection.module.scss"

interface Props {
    children: any;
}

export default function ThreeItemSectionComponent (props: Props) {
    return(
        <div className={styles.main}>
            {props.children}

            {/* 
            Example Structure
            <div>
                <h5>TEXT HERE</h5>
                <p>text here</p>
                <p>text here</p>
                <div>
                    <Image fill src="monitor.svg" alt='Computer Monitor Icon'></Image>
                </div>
            </div>
            <span></span>
            <div>
                <h5>TEXT HERE</h5>
                <p>text here</p>
                <p>text here</p>
                <div>
                    <Image fill src="monitor.svg" alt='Computer Monitor Icon'></Image>
                </div>
            </div>
            <span></span>
            <div>
                <h5>TEXT HERE</h5>
                <p>text here</p>
                <p>text here</p>
                <div>
                    <Image fill src="monitor.svg" alt='Computer Monitor Icon'></Image>
                </div>
            </div> 
            */}
        </div>
    )
}