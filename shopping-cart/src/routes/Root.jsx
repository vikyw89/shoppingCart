import { useState } from 'react'
import styles from './Root.module.css'
import { Footer } from '../modules/Footer'
import { Header } from '../modules/Header'
import { Main } from '../modules/Main'

export function Root() {

  return (
    <div className={styles.container}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
