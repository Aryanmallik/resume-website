'use client'
import styles from '../styles/Hero.module.css';
import MoonScene from "./3js1.jsx";
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
                            <li><Link href="https://drive.google.com/file/d/1WIPygNriOo2g5SHgensVCow0lqENdHhz/view?usp=sharing" download target="_blank">My resume</Link></li>
                        </ul>
                    </div>

                    <div className={styles.hero__bg}>
                        <picture>
                            <MoonScene />
                        </picture>
                    </div>

                    <div className={styles.hero__cnt}>
                        <div className={styles.container}>
                            <p className={styles.text}>Hello! I'm</p>
                            <section className={styles.animation}>
                                <div className={styles.first}><div>Aryan</div></div>
                                <div className={styles.second}><div>a Web Developer</div></div>
                                <div className={styles.third}><div>and a Photographer</div></div>
                            </section>
                            <div className={styles.sidebarMobile}>
                                <picture>
                                </picture>
                                <ul className={styles.sidebarList}>
                                    <li><Link href="./about">About Me</Link></li>
                                    <li><Link href="./photos">Photos</Link></li>
                                    <li><Link href="https://drive.google.com/file/d/1WIPygNriOo2g5SHgensVCow0lqENdHhz/view?usp=sharing" download target="_blank">My resume</Link></li>
                                    <li><Link href="https://github.com/Aryanmallik" target="_blank">Github</Link></li>
                                    <li><Link href="mailto:aryanmallik2004@gmail.com" target="_blank">Mail</Link></li>
                                    <li><Link href="https://linkedin.com/in/aryanmallikkk" target="_blank">LinkedIn</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sidebarRight}>
                        <ul className={styles.sidebarList}>
                            <li><Link href="https://github.com/Aryanmallik" target="_blank">Github</Link></li>
                            <li><Link href="mailto:aryanmallik2004@gmail.com" target="_blank">Mail</Link></li>
                            <li><Link href="https://linkedin.com/in/aryanmallikkk" target="_blank">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;

