import Head from 'next/head'
import styles from '@/styles/About.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import Image from 'next/image'


export default function About() {

  const [activePage, setActivePage] = useState<Pages>('about');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);


  const pageSelected = (page: Pages) => {
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
              showFormModal={showFormModal}
              setShowFormModal={setShowFormModal}
            ></HeaderComponent>
          </div>
          <div className={styles.body}>
            <div className={styles.titleContainer}>
              <Image style={{filter: "invert(1)"}} src="/smile.svg" alt='Phone icon' width={50} height={50}></Image>
              <h1>ABOUT US</h1>
              <button onClick={()=>setShowFormModal(true)}>GET IN TOUCH!</button>
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
