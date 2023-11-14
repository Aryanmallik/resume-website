// pages/index.js
import React from 'react';
import Image from 'next/image';
import Header from '../components/header';
import Link from 'next/link';
import Footer from '../components/footer';
const Home = () => {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/daisyui@3.9.3/dist/full.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com" />  
    <Header/>

      <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/wat.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">About Me</h1>
      <p className="py-6">Hi, Im Aryan. Im a... Im a, Im a, Im an-Im an anomaly, I turned into a rapper ironically
            And ran the bag up, back up, niggas is onto me
            Niggas should honor me
            If you think Im a wannabe, its pretty comedy
            Im melancholy and cool, so calmly bustin moves
            My truths carry velocity
            Same posse since OshPosh Bgosh, pussy clot
            Treat the rappin like Im pushin rock
            On the stove with the Pyrex pot
            The door stay locked, it dont say knock
            We on they block, we own they block
            Is Monopoly games, we stole they property</p>
            <h2>Check Out My <a href="https://www.youtube.com/AryanMallik" target="_blank"><b><u>YouTube channel</u></b></a></h2>
            <br/>
      <Link className="btn btn-primary" href={"resume"}>My Photos</Link>
    </div>
  </div>
</div>
<Footer/>
    </>
  );
};

export default Home;
