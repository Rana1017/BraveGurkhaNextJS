import React from 'react';
import styles from '../styles/HeroPage.module.scss';
import Images from  'next/image';
import British from '../public/images/britisharmy.png';
const HeroPage = () => {
  return (
    <div className={styles.hero_Section}>
        <div className={styles.hero_Container}>
            <div className={styles.leftsection}>
                <h1 className={styles.heading}>Dream, Work & Succeed</h1>
                <p className={styles.paragraph}>Want to become Soldier.</p>
                <div className={styles.button_section}>
                    <button className={styles.program}>View Program</button>
                    <button className={styles.program}>Learn more..</button>

                </div>


            </div>
            <div className={styles.rightsection}>
                 <Images  src={British} alt='a picture of nepali british boy' className={styles.img}/>
               
                
            </div>
        </div>
    </div>
  )
}

export default HeroPage