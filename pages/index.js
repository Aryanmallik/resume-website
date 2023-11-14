// pages/index.js
import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Link from 'next/link';
import Footer from '../components/footer';
import styles from "../styles/index.module.css";
const Home = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/daisyui@3.9.3/dist/full.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com" />  

     
  <Header/>
    <div className={styles.diva}>
      <div className="hero h-screen"  style={{backgroundImage: 'url("bg.jpg")'}}>
      <div className="hero-overlay bg-opacity-60"></div>

  <div className="hero-content flex-col lg:flex-row-reverse">
    <div style={{marginLeft:"5rem"}}>
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">Hi👋🏻, Im Aryan👦🏻. I take photso📸. my camera📸 is nikon D5300🤢.<br/></p>
            <h2>Check Out My <a href="https://www.youtube.com/AryanMallik" target="_blank"><b><u>YouTube channel</u></b></a></h2>
            <br/>
      <Link className="btn btn-primary" href={"resume"}>My Photos</Link>
    </div>
    <img src="/pic.jpg" className=" rounded-lg shadow-2xl" style={{width:"30rem"}}/>
  </div>
</div>
</div>

<div className={styles.divmobile}>
      <div className="hero h-screen"  style={{backgroundImage: 'url("bg.jpg")'}}>
      <div className="hero-overlay bg-opacity-60"></div>

  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/pic.jpg" className=" rounded-lg shadow-2xl" style={{width:"30rem"}}/>
    <div style={{marginLeft:"5rem"}}>
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">Hi👋🏻, Im Aryan👦🏻. I take photso📸. my camera📸 is nikon D5300🤢.<br/></p>
            <h2>Check Out My <a href="https://www.youtube.com/AryanMallik" target="_blank"><b><u>YouTube channel</u></b></a></h2>
            <br/>
      <Link className="btn btn-primary" href={"resume"}>My Photos</Link>
    </div>
  </div>
</div>
</div>
<Footer/>
    </>
  );
};

export default Home;
