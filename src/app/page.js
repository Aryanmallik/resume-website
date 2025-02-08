'use client'
import { useEffect } from 'react';
import Hero from '../components/Hero';
import styles from "../styles/index.module.css";

export default function Home() {
    useEffect(() => {
        document.body.classList.add(styles.hiddenOverflow);
        return () => {
            document.body.classList.remove(styles.hiddenOverflow);
        };
    }, []);

    return (
        <div className={styles.bod}>
            <Hero />
        </div>
    );
}


