import Head from 'next/head'
import styles from '@/styles/About.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import Image from 'next/image'
import ImageTextSectionComponent from '@/components/imageTextSection'
import OneItemSectionComponent from '@/components/oneItemSection'
import ThreeItemSectionComponent from '@/components/threeItemSection'
import ContactFormComponent from '@/components/contactForm'
import Link from 'next/link'


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
              <Image style={{filter: "invert(1)"}} src="/compass.svg" alt='Phone icon' width={50} height={50}></Image>
              <h1>ABOUT US</h1>
              <button onClick={()=>setShowFormModal(true)}>GET IN TOUCH!</button>
            </div>
          </div>
            <div className={styles.sectionTwo}>
              <ImageTextSectionComponent>
                <section id={styles.photoOfMe} style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                  {/* <Image src='/handshakeThin.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image> */}
                  <Image fill src='/trentTrust.jpg' alt="photo of the developer" style={{borderRadius: "12px", filter: 'none', boxShadow: "1px 1px 18px black"}}></Image>
                  <div style={{color:"white", height:"115%", display: "flex", position: "relative", alignItems: "flex-end", fontSize: "12px", fontWeight: "100"}}>My Partner and I</div>
                </section>
                <div className={styles.textContainer} id={styles.textContainer}>
                  <p style={{color: '#9f8763'}}>Tedly Web Services LLC</p>
                  <h1>Modern Designs for Small Businesses</h1>
                  <p>{`Hi! My name is Trent Deckard.`}</p>
                  <p>{`
                  As the owner and sole developer of Tedly Web Services, 
                  I bring over four years of hands-on development experience to the table. 
                  From creating visually-stunning business websites to building complex web applications 
                  and everything in between, my passion for web development runs deep.
                  Tedly was founded on a shared enthusiasm for coding, problem-solving, creativity, and exceeded expectations.
                 `}</p>
                  <p>{`
                  Small businesses often don't have thousands of dollars to spend up front on a new website.
                  Those that do risk being taken advantage of by mass-production companies, resulting in a generic
                  website that fails to capture the unique aspects of their business. 
                  Our $160 monthly model aims to solve this, with the added benefit of 24/7 support and unlimited edits.
                  `}</p>
                  <p>{`We understand the struggles of small businesses and strive to provide beautiful, customized website solutions that meet your specific needs.`}</p>
                  <p>{`"I wouldn't choose anyone else!" - My Goal`}</p>
                </div>
              </ImageTextSectionComponent>
              <div style={{marginTop: "150px"}}>
                <OneItemSectionComponent>
                  <span>
                    <h1><span>Tailored</span> For You</h1>
                    <p>
                    We specialize in creating tailored content that caters to the unique needs of each business. 
                    We work closely with you throughout the process to ensure that your website meets all expectations.
                    </p>
                    <div>
                        <Image src='tune.svg' fill alt="Storefront Icon"></Image>
                    </div>
                  </span>
                </OneItemSectionComponent>
              </div>

              <Link style={{textDecoration: "none"}} href={"/services"}><button className={styles.servicesButton}>SERVICES</button></Link>
              {/* <a style={{textDecoration: "none"}} href="/services"></a> */}

              <ThreeItemSectionComponent>
                <div>
                  <h5>A+ Customer Care</h5>
                  <p>Get help quickly and easily</p>
                  <p>No automated systems or hold music</p>
                  <div>
                      <Image fill src="smile.svg" alt='Computer Monitor Icon'></Image>
                  </div>
                </div>
                <span></span>
                <div>
                  <h5>Mobile Support</h5>
                  <p>58% of browsing happens on mobile</p>
                  <p>Visit your website from anywhere</p>
                  <div>
                      <Image fill src="smartphone.svg" alt='Gear icon'></Image>
                  </div>
                </div>
                <span></span>
                <div>
                  <h5>Unlimited Edits</h5>
                  <p>Products, prices, images, wording</p>
                  <p>Change is good with Tedly</p>
                  <div>
                      <Image fill src="gearSparkle.svg" alt='Gear icon'></Image>
                  </div>
                </div>
              </ThreeItemSectionComponent>
              
              <div style={{marginTop: "150px"}}>
                <div className={styles.formSection}>
                  <ImageTextSectionComponent>
                    <div className={styles.formContainer}>
                      <ContactFormComponent
                        showCloseIcon={false}
                      ></ContactFormComponent>
                    </div>
                    {/* <div className={styles.contactContainer}>
                      / /<Image src="/paperPlaneThin.svg" height={60} width={60} 
                      style={{filter: "invert(1)", rotate: "-20deg"}}
                      alt='paper airplane icon'></Image>
                      <h1><span>Phone</span></h1>
                      <h2><a href="tel:8123605563">812-360-5563</a></h2>
                      <h1><span>Email</span></h1>
                      <h2><a href="mailto:tredeckard@gmail.com">tredeckard@gmail.com</a></h2>
                      <h1><span>Location</span></h1>
                      <h2>Columbus Ohio</h2>
                    </div> */}
                  </ImageTextSectionComponent>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
