// pages/index.js
import React from 'react';
import Image from 'next/image';
const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Website🤪</h1>
      </header>

      <nav>
       
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./resume">Resume</a></li>
        </ul>
      </nav>

          <Image id='awoooga' src={"/aaa.png"} width={1950} height={300} alt='me'/>
      <main>
        <section>
          <h2>About Me</h2>
          <p id='aboutme'>Hi, Im Aryan. Im a... Im a, Im a, Im an-Im an anomaly, I turned into a rapper ironically
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
        </section>

        <section>
          <h2></h2>
          <p>na...</p>
        </section>
      <section>
          <h2>Check Out My YouTube Channel</h2>
          <p>Watch my latest videos on my <a href="https://www.youtube.com/AryanMallik" target="_blank">YouTube channel</a>.</p>
        </section>
      </main>


      <footer>
      </footer>
    </div>
  );
};

export default Home;
