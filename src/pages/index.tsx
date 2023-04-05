import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'

export default function Home() {

  const [activePage, setActivePage] = useState<Pages>('home');
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const pageSelected = (page: Pages) => {
    console.log(page)
    setActivePage(page)
  }

  const openMobileMenu = () => {
    console.log("open")
    setMenuIsOpen(true);
  }

  const closeMobileMenu = () => {
    console.log("close")
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
          <div className={styles.body}>
            <HeaderComponent 
              activePage={activePage} 
              linkCallback={pageSelected}
              openMenuCallback={openMobileMenu}
              menuIsOpen={menuIsOpen}
            ></HeaderComponent>
            <div className={styles.titleText}>
              <h1>Modern Web Design + Development</h1>
              <p>We offer 100% hand-coded websites without the need for page builders or WordPress. - Unlimited edits and 24/7 support starting at $150/mo.</p>
              <button>GET IN TOUCH!</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
