import Head from 'next/head'
import FirstBox from '../components/FirstBox'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.bg}>
      <Head>
        <title>Fab Glass and Mirror</title>
      </Head>
      <FirstBox />
    </div>
  )
}
