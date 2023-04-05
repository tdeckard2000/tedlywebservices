import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeaderComponent from '@/components/header'
import { useState } from 'react'
import { Pages } from '@/types/main'

export default function Home() {

  const [activePage, setActivePage] = useState<Pages>('home')

  const pageSelected = (page: Pages) => {
    console.log(page)
    setActivePage(page)
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
        <div className={styles.header}>
        </div>
        <div className={styles.float}>
          <div className={styles.body}>
            <HeaderComponent activePage={activePage} linkCallback={pageSelected}></HeaderComponent>
            <div className={styles.titleText}>
              <h1>Modern Web Design + Development</h1>
              <p>No page builders or WordPress 
                - We offer 100% hand-coded websites with superior results starting at $150/mo.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
