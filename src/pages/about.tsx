import Head from 'next/head'
import styles from '@/styles/About.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import Image from 'next/image'
import ImageTextSectionComponent from '@/components/imageTextSection'
import OneItemSectionComponent from '@/components/oneItemSection'


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
              {/* <ImageTextSectionComponent>
                <section>
                  <Image src='/meSanFranLong.jpg' alt="laptop on white background" style={{filter: "none", borderRadius: "10px"}} height={400} width={300}></Image>
                </section>
                <div>
                  <p>Tedly Web Services</p>
                  <p>Tedly Web Services</p>
                  <p>Tedly Web Services</p>
                  <h1><span>$500</span> down. <span>$160</span> Per Month. <br></br>6 Month Minimum Contract.</h1>
                  <p>We keep it simple. No hidden fees or surprises. $500 down for a standard 4 page small business website.</p>
                  <p>Cancel anytime with no fees or hassles.</p>
                </div>
              </ImageTextSectionComponent> */}
              {/* <div className={styles.flexContainer}>
                <div className={styles.image}>
                  <Image src='/meSanFranLong.jpg' alt="laptop on white background" style={{filter: "none", borderRadius: "4px"}} height={483} width={400}></Image>
                </div>
                <div className={styles.text}>
                  <h1>Test</h1>
                  <p>More Test</p>
                </div>
              </div> */}
              <ImageTextSectionComponent>
                <section className={styles.photoOfMe} style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                  {/* <Image src='/handshakeThin.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image> */}
                  <Image height={210} width={210} src='/trentTrust.jpg' alt="photo of the developer" style={{borderRadius: "50px", filter: 'none', border: '3px solid black', boxShadow: "1px 1px 18px black"}}></Image>
                </section>
                <div className={styles.textContainer} id={styles.textContainer}>
                  <p style={{color: '#9f8763'}}>Tedly Web Services</p>
                  <h1>Modern Designs for Small Businesses</h1>
                  <p>{`Hi! My name is Trent Deckard.`}</p>
                  <p>{`
                  I am the owner and sole developer for Tedly Web Services.
                  Originally from Indiana, I accepted a full-stack web development role for
                  a company in northern Utah where I worked for over four years.
                   Prior to that, I spend some time working for the Mt. Hood National Forest in Oregon.
                   I relocated to Columbus Ohio in 2023.`}</p>
                  <p>The girl there in the picture? She brought me to Ohio.</p>
                </div>
              </ImageTextSectionComponent>
            </div>
        </div>
      </main>
    </>
  )
}
