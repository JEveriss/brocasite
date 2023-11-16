import Image from 'next/image'
import styles from './page.module.css'
import logo from '../assets/brocalogo.png'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.test}>
        <Image className={styles.title} alt="broca Logo" src={logo}/>
<hr/>
        <Image className={styles.title} alt="broca Logo" src={logo}/>
<hr/>
        <Image className={styles.title} alt="broca Logo" src={logo}/>
<hr/>
        <Image className={styles.title} alt="broca Logo" src={logo}/>

      </div>
    </div>
  )
}
