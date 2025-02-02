import React from 'react'
import Weather from '../../components/Weather/Weather'
import Search from '../../components/Search/Search'
import styles from './home.module.css'


const Home = () => {
  return (
    <div className={styles.home}>
        <Search />
        <Weather />
    </div>
  )
}

export default Home