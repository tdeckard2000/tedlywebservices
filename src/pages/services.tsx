import Head from 'next/head'
import styles from '@/styles/Services.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import Image from 'next/image'
import ImageTextSectionComponent from '@/components/imageTextSection'
import OneItemSection from '@/components/oneItemSection'
import ThreeItemSectionComponent from '@/components/threeItemSection'


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
              <ImageTextSectionComponent>
                <section>
                  <Image src='/designServices.svg' alt="laptop on white background" fill style={{borderRadius: "10px 0 0 10px"}}></Image>
                </section>
                <div>
                  <h1>Web Design + Development<br /> Done Right</h1>
                  <p>{`We don't use bloated plugins, third-party code, WordPress, or page builders. We carefully write every line of code by hand, 
                  allowing for better real-world performance and more flexibility when it comes to designing your website.`}</p>
                  <p>{"For the best conversion rates and higher search rankings, faster websites are where it's at."}</p>
                </div>
              </ImageTextSectionComponent>

              <Image className={styles.sectionDivider} src="/dots.svg" alt='Squiggle line icon' width={30} height={30}></Image>

              <ImageTextSectionComponent>
                <section className={styles.mobileImage}>
                  <Image src='/modernDesign.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image>
                </section>
                <div>
                  <h1>Sleek & Modern</h1>
                  <p>{`We specialize in modern, clean website designs. 
                  This makes it easier for customers to navigate your website and it directs their attention to what matters most.`} </p>
                </div>
                <section className={styles.desktopImage}>
                  <Image src='/modernDesign.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image>
                </section>
              </ImageTextSectionComponent>

              <Image className={styles.sectionDivider} src="/dots.svg" alt='Squiggle line icon' width={30} height={30}></Image>

              <ImageTextSectionComponent>
                <section>
                  <Image src='/earthSearch.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image>
                </section>
                <div>
                  <h1>Search Engine Optimized</h1>
                  <p>{`To rank your website higher on Google, we follow all the latest and greatest SEO best practices.
                  User accessibility, quick loading times, mobile and tablet support, and clean code structures each 
                  play an important role in Google's ranking algorithm.`} </p>
                </div>
              </ImageTextSectionComponent>

              <Image className={styles.sectionDivider} src="/dots.svg" alt='Squiggle line icon' width={30} height={30}></Image>

              <ImageTextSectionComponent>
                <section className={styles.mobileImage}>
                  <Image src='/gearSparkle.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image>
                </section>
                <div>
                  <h1>Unlimited Changes</h1>
                  <p>
                    Call me at any time, day or night.
                    I will update your images, change your prices, or modify your products and services quickly and effectively.
                  </p>
                  <p>{`Don't sweat it.`}</p>
                </div>
                <section className={styles.desktopImage}>
                  <Image src='/gearSparkle.svg' alt="laptop on white background" fill style={{borderRadius: " 0 10px 10px 0"}}></Image>
                </section>
              </ImageTextSectionComponent>

              <Image className={styles.sectionDivider} src="/dots.svg" alt='Squiggle line icon' width={30} height={30}></Image>

              <ImageTextSectionComponent>
                <section>
                  <Image className={styles.photoOfMe} src='/trentTrust.jpg' alt="photo of the developer" fill style={{borderRadius: "50px", filter: 'none'}}></Image>
                </section>
                <div>
                  <h1>A Developer you can Trust</h1>
                  <p>{`The #1 complaint I hear about other development companies is a lack of communication (or none at all).`}</p>
                  <p>{`That will`} <span style={{textDecoration: "underline"}}>not</span> {`be your experience with Tedly. 
                  Clear communication and timely replies are paramount. Just tell me what you need.`}</p>
                </div>
              </ImageTextSectionComponent>

              <Image className={styles.sectionDivider} src="/dots.svg" alt='Squiggle line icon' width={30} height={30}></Image>

              <OneItemSection>
                <span className={styles.pitch}>
                  <h1><span>Searching</span> For Something Else?</h1>
                  <p>I offer other services as well. Let me build what you need</p>
                </span>
                {/* <div>
                      <Image src='checklist.svg' fill alt="Storefront Icon"></Image>
                </div> */}
              </OneItemSection>

              <ThreeItemSectionComponent>
                <div>
                    <h5>WEB APPLICATIONS</h5>
                    <p>Need something more complex?</p>
                    <p>I do that too <a style={{color: "white"}} href="https://www.trentendeavors.com">portfolio</a></p>
                    <div>
                      <Image fill src="terminal.svg" alt='Computer Monitor Icon'></Image>
                    </div>
                </div>
                <span></span>
                <div>
                    <h5>WEBSITE CONSULTING</h5>
                    <p>Still figuring out what you need?</p>
                    <p>Let me answer your questions</p>
                    <div>
                      <Image fill src="assistance.svg" alt='Computer Monitor Icon'></Image>
                    </div>
                </div>
                <span></span>
                <div>
                    <h5>FIX EXISTING SITES</h5>
                    <p>Problems with a website someone else made?</p>
                    <p>Let me fix it for you</p>
                    <div>
                      <Image fill src="constructionGuy.svg" alt='Cloud Icon'></Image>
                    </div>
                </div> 
              </ThreeItemSectionComponent>
            </div>
        </div>
      </main>
    </>
  )
}
