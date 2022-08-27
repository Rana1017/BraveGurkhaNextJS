import React from 'react'
import styles from '../styles/Footer.module.scss';

const footer = () => {
  return (
    <div className={styles.footer_Section}>
      <div className={styles.footer_Container}>
          <div className={styles.about_Section}>
              <div className={styles.heading}>BraveGurkha</div>
              <p className={styles.paragraph}>           
              Brave Gurkha Pvt. Ltd. is a leading Pre-Gurkha Army Training Academy.          
              </p>
              <div className={styles.icon_Section}>
                 <div className={styles.icon}> Insta</div>
                 <div className={styles.icon}> Fb</div>
                 <div className={styles.icon}> Twitter</div>
              </div>

          </div>

          <div className={styles.classes_Section}>
             <div className={styles.sub_Heading}> Classes</div>
                
                   <ul className={styles.classes}>
                      <li className={styles.link_Classes}>
                           <a href="/">British Gurkha Army</a>
                       </li>
                      <li className={styles.link_Classes}>
                            <a href="/"> Singapore Police Force</a>
                        </li>
                        <li className={styles.link_Classes}>
                           <a href="/">Indian Gurkha Army</a>
                        </li>
                        <li className={styles.link_Classes}>
                           <a href="/">Nepal Army</a>
                        </li>
                        <li className={styles.link_Classes}>
                            <a href="/"> Nepal Police Force</a>
                        </li>

                   </ul>
             

              
          </div>

          <div className={styles.contact_Section}>
          <div className={styles.sub_Heading}> Contact</div>
               <div className={styles.details}>
                   <p className={styles.address}>Office Address:</p>
                   <p>Kalinchowk-12, Surkhet</p>
               </div>

               <div className={styles.details}>
                   <p className={styles.address}>Training Hall:</p>
                   <p>Kalinchowk Ground, Surkhet</p>
               </div>

               <div className={styles.details}>
                   <p className={styles.address}>Phone no:</p>
                   <p>9867899067, 9812534567</p>
               </div>

          </div>

      </div>
    </div>
  )
}

export default footer