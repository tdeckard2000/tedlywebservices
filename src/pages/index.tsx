import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'
import MobileMenuComponent from '@/components/mobileMenu'
import ThreeItemSectionComponent from '@/components/threeItemSection'
import Image from 'next/image'
import OneItemSection from '@/components/oneItemSection'
import CheckListSection from '@/components/checkListSection'
import StatusModalComponent from '@/components/statusModal'

export default function Home() {

  const [activePage, setActivePage] = useState<Pages>('home');
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
          <HeaderComponent 
            activePage={activePage} 
            linkCallback={pageSelected}
            openMenuCallback={openMobileMenu}
            menuIsOpen={menuIsOpen}
            showFormModal={showFormModal}
            setShowFormModal={setShowFormModal}
          ></HeaderComponent>
          <div className={styles.body}>
            <div className={styles.titleText}>
              <h1>Modern Web Design + Development</h1>
              <p>We offer 100% hand-coded websites without the need for page builders or WordPress. - Unlimited edits and 24/7 support starting at $160/mo.</p>
              <button onClick={() => setShowFormModal(true)}>GET IN TOUCH!</button>
            </div>
          </div>
          <div className={styles.sectionTwo}>
            <OneItemSection>
              <span>
                <h1><span>What</span> We Offer</h1>
                <p>
                    We specialize in web design and development for small businesses across the US. - 
                    All code is handwritten for optimal performance, helping to drive more customers to your website and increased revenue to your business.
                </p>
                <div>
                    <Image src='ribbon.svg' fill alt="Storefront Icon"></Image>
                </div>
              </span>
            </OneItemSection>
            <ThreeItemSectionComponent>
              <div>
                  <h5>RESPONSIVE</h5>
                  <p>Access your website from anywhere</p>
                  <p>Fits all mobile, tablet, and desktop screens</p>
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
                  <p>Hosting is included in the monthly payment</p>
                  <p>No need to worry about it</p>
                  <div>
                    <Image fill src="cloud.svg" alt='Cloud Icon'></Image>
                  </div>
              </div> 
            </ThreeItemSectionComponent>
            <OneItemSection>
              <span className={styles.pitch}>
              <h1><span>$500</span> down. <span>$160</span> Per Month. <br></br>6 Month Minimum Contract.</h1>
              <p>We keep it simple. No hidden fees or surprises. <br /> 
                $500 down for a standard 4 page small business website. <br /> Cancel anytime, no costs or hassles.</p>
              </span>
              <div>
                    <Image src='checklist.svg' fill alt="Storefront Icon"></Image>
              </div>
            </OneItemSection>
            <CheckListSection></CheckListSection>
            <OneItemSection>
              <span className={styles.aboutMe}>
                <h1><span>Who</span> We Are</h1>
                <p>My nickname is <span style={{color: '#9f8763', fontWeight: '500'}}>Ted</span>, but you can call me <span>Trent</span>. 
                  I have been developing websites for 5+ years professionally and for fun.
                  Tedly was created as a means to work for myself. I enjoy the technical challenges and
                  personal connections that come with running your own business.</p>
                <p>Learn more: <a href="https://www.trentendeavors.com">Personal Portfolio</a></p>
                <Image className={styles.me} src='/meCropped.jpg' height={200} width={200} alt="Storefront Icon"></Image>
                <p className={styles.name}>Trent Deckard</p>
                <p className={styles.title}>OWNER & DEVELOPER</p>
                <p className={styles.title}><a href="tel:8123605563">812-360-5563</a><br /><a href="mailto:tredeckard@gmail.com">tredeckard@gmail.com</a></p>
              </span>
            </OneItemSection>
          </div>
        </div>
      </main>
    </>
  )
}
