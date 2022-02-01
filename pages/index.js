import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import styles from '../styles/Header.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  )
}
