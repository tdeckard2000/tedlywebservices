import Head from 'next/head'
import styles from '@/styles/Services.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import Image from 'next/image'


export default function Services() {

  const [activePage, setActivePage] = useState<Pages>('services');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const pageSelected = (page: Pages) => {
    console.log(page)
    setActivePage(page)
  }

  const openMobileMenu = () => {
    setMenuIsOpen(true);
  }

  const closeMobileMenu = () => {
    setMenuIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Tedly Web Services</title>
        <meta name="description" content="Quality Websites For Small Businesses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" as='image' imageSrcSet='bgMobile1.webp 700w, bgDesktop1.webp 1500w' imageSizes='100%'/> */}
      </Head>
      <main className={styles.main}>
        <MobileMenuComponent
          menuIsOpen={menuIsOpen}
          closeCallback={closeMobileMenu}
          linkCallback={pageSelected}
          activePage={activePage}
        ></MobileMenuComponent>
        <div className={styles.float} onClick={menuIsOpen ? closeMobileMenu : () => {}}>
          <div className={styles.backdrop}></div>
          <div className={styles.headerContainer}>
            <HeaderComponent 
              activePage={activePage} 
              linkCallback={pageSelected}
              openMenuCallback={openMobileMenu}
              menuIsOpen={menuIsOpen}
            ></HeaderComponent>
          </div>
          <div className={styles.body}>
            <div className={styles.titleContainer}>
              <Image style={{filter: "invert(1)"}} src="/blocks.svg" alt='Phone icon' width={50} height={50}></Image>
              <h1>OUR SERVICES</h1>
              <button>GET IN TOUCH!</button>
            </div>
          </div>
            <div className={styles.sectionTwo}>
              <h1>Placeholder</h1>
            </div>
        </div>
      </main>
    </>
  )
}
