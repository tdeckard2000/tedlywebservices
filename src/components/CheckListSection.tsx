import React from "react";
import styles from "@/styles/CheckListSection.module.scss"
import Image from "next/image";

interface Props {
    children: any;
}

export default function CheckListSection (props: Props) {
    return(
        <div className={styles.main}>
            {/* {props.children} */}
            <div className={styles.row}>
                <div className={styles.block}>
                    <Image src={'/check.svg'} alt="check icon" width={30} height={30}></Image>
                    <div>
                        <h5>Hosting Included</h5>
                        <p>Website hosting is included in the monthly payment</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image src={'/check.svg'} alt="check icon" width={30} height={30}></Image>
                    <div>
                        <h5>Unlimited Edits</h5>
                        <p>Change text, update images, adjust prices whenever you want</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <Image src={'/check.svg'} alt="check icon" width={30} height={30}></Image>
                    <div>
                        <h5>24/7 Support</h5>
                        <p>You get a direct line, no automated systems or menus</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image src={'/check.svg'} alt="check icon" width={30} height={30}></Image>
                    <div>
                        <h5>Design & Development</h5>
                        <p>Includes 40+ hours of design, development, and testing</p>
                    </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <Image src={'/check.svg'} alt="check icon" width={30} height={30}></Image>
                    <div>
                        <h5>Google Speed Score</h5>
                        <p>We follow Google's best practices to improve your search ranking</p>
                    </div>
                </div>
                <div className={styles.block}>
                    <Image src={'/check.svg'} alt="check icon" width={30} height={30}></Image>
                    <div>
                        <h5>Google Analytics</h5>
                        <p>Installed for free to monitor site traffic and see where it comes from</p>
                    </div>
                </div>
            </div>
        </div>
    )
}