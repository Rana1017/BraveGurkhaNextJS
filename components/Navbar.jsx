import React from 'react';
import styles from '../styles/Navbar.module.scss'


const navbar = () => {
  return (
    <div className={styles.navbar_section}>
        <div className={styles.logo}>BraveGurkha</div>
        <div className={styles.navbar_menus}>
            <ul className={styles.navbar_list}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Courses</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                

            </ul>

        </div>

    </div>
  )
}

export default navbar