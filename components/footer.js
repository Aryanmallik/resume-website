// Footer.jsx
import React from 'react';
import styles from '../styles/footer.module.css'; // Import CSS Module styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
const Footer = () => {
  return (
  <>
    <header>

</header>
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <p className={styles.p}>Reach me at</p>
        <a href="https://www.instagram.com/aryanmallikk">
          <FontAwesomeIcon icon={faInstagram} style={{height:"1.2rem"}} ></FontAwesomeIcon>
        </a>
        <a href="tel:+919686629493">
          <FontAwesomeIcon icon={faPhone} style={{height:"1.2rem"}} />
        </a>
        <a href="mailto:aryanmallik2004@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={{height:"1.2rem"}} />
        </a>
      </div>

      <div>
      </div>
    </footer>

    </>
  );
};

export default Footer;
