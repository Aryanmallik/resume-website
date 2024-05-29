'use client'
import styles from '../styles/Hero.module.css';
import Link from 'next/link';
import React from 'react';
const Hero = () => {
    return (
        <>

            <div className={styles.heroWrapper}>
                <div className={styles.hero}>
                    <div className={styles.sidebarLeft}>
                        <ul className={styles.sidebarList}>
                            <li><Link href="./about">About Me</Link></li>
                            <li><Link href="./photos">Photos</Link></li>
                            <li><Link href="https://github.com/Aryanmallik">Github</Link></li>
                        </ul>
                    </div>

                    <div className={styles.hero__bg}>
                        <picture>
                            <img src="20.png" alt="Hero Background" />
                        </picture>
                    </div>

                    <div className={styles.hero__cnt}>
                        <div className={styles.container}>
                            <p className={styles.text}>Hello! I'm</p>
                            <section className={styles.animation}>
                                <div className={styles.first}><div>Aryan</div></div>
                                <div className={styles.second}><div>Web Developer</div></div>
                                <div className={styles.third}><div>Photographer</div></div>
                            </section>
                            <div className={styles.sidebarMobile}>
                                <ul className={styles.sidebarList}>
                                    <li><Link href="./about">About Me</Link></li>
                                    <li><Link href="./photos">Photos</Link></li>
                                    <li><Link href="https://github.com/Aryanmallik">Github</Link></li>
                                    <li><Link href="mailto:aryanmallik2004@gmail.com">Mail</Link></li>
                                    <li><Link href="https://linkedin.com/in/aryanmallikkk">LinkedIn</Link></li>
                                    <li><Link href="tel:+919686629493">Phone</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sidebarRight}>
                        <ul className={styles.sidebarList}>
                            <li><Link href="mailto:aryanmallik2004@gmail.com">Mail</Link></li>
                            <li><Link href="https://linkedin.com/in/aryanmallikkk">LinkedIn</Link></li>
                            <li><Link href="tel:+919686629493">Phone</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

