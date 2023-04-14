import Head from 'next/head'
import styles from '@/styles/Contact.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import Image from 'next/image'
import ContactFormComponent from '@/components/contactForm'
import OneItemSectionComponent from '@/components/oneItemSection'
import ImageTextSectionComponent from '@/components/imageTextSection'


export default function Contact() {

  const [activePage, setActivePage] = useState<Pages>('contact');
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
              showFormModal={showFormModal}
              setShowFormModal={setShowFormModal}
            ></HeaderComponent>
          </div>
          <div className={styles.body}>
            <div className={styles.titleContainer}>
              <Image style={{filter: "invert(1)"}} src="/phone.svg" alt='Phone icon' width={50} height={50}></Image>
              <h1>{"LET'S CHAT"}</h1>
              <button onClick={()=>setShowFormModal(true)}>GET IN TOUCH!</button>
            </div>
          </div>
            <div className={styles.sectionTwo}>
              <div>
                <OneItemSectionComponent>
                  <h1><span>Get</span> in Touch</h1>
                  <p>Via Form, Phone or Email</p>
                </OneItemSectionComponent>
                <div className={styles.formSection}>
                  <ImageTextSectionComponent>
                    <div className={styles.formContainer} id='test'>
                      {/* <h1><span>Via</span> Form,</h1> */}
                      <ContactFormComponent
                        showCloseIcon={false}
                      ></ContactFormComponent>
                    </div>
                    <div className={styles.contactContainer}>
                      {/* <h1><span>Phone</span>, or Email</h1> */}
                      / /<Image src="/paperPlaneThin.svg" height={60} width={60} 
                      style={{filter: "invert(1)", rotate: "-20deg"}}
                      alt='paper airplane icon'></Image>
                      <h1><span>Phone</span></h1>
                      <h2><a href="tel:8123605563">812-360-5563</a></h2>
                      <h1><span>Email</span></h1>
                      <h2><a href="mailto:tredeckard@gmail.com">tredeckard@gmail.com</a></h2>
                      <h1><span>Location</span></h1>
                      <h2>Columbus Ohio</h2>
                    </div>
                  </ImageTextSectionComponent>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
