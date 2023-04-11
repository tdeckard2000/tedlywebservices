import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import ThreeItemSectionComponent from '@/components/threeItemSection'
import Image from 'next/image'

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
              <p>We offer 100% hand-coded websites without the need for page builders or WordPress. - Unlimited edits and 24/7 support starting at $160/mo.</p>
              <button>GET IN TOUCH!</button>
            </div>
          </div>
          <div className={styles.sectionTwo}>
            <ThreeItemSectionComponent>
              <div>
                  <h5>RESPONSIVE</h5>
                  <p>Fits all mobile, tablet, and desktop screens</p>
                  <p>Access your website from anywhere</p>
                  <div>
                    <Image fill src="monitor.svg" alt='Computer Monitor Icon'></Image>
                  </div>
              </div>
              <span></span>
              <div>
                  <h5>OPTIMIZED</h5>
                  <p>Superior search engine performance</p>
                  <p>{"Follows all of Google's latest best practices"}</p>
                  <div>
                    <Image fill src="chart.svg" alt='Computer Monitor Icon'></Image>
                  </div>
              </div>
              <span></span>
              <div>
                  <h5>HOSTED</h5>
                  <p>Hosting is built into the monthly payment</p>
                  <p>No need to worry about it</p>
                  <div>
                    <Image fill src="cloud.svg" alt='Cloud Icon'></Image>
                  </div>
              </div> 
            </ThreeItemSectionComponent>
          </div>
        </div>
      </main>
    </>
  )
}
