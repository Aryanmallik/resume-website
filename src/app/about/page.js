'use client'
import styles from "@/src/styles/aboutme.module.scss";
import ScrollDownArrow from "@/src/components/scroll";
import Header from "@/src/components/header";
import Header1 from "@/src/components/header copy";
import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import Card from "@/src/components/card";
import Skill from "@/src/components/skill";
const About = () => {
    const h1Ref = useRef(null);

    useEffect(() => {
        document.title = "About Me";
        const handleScroll = () => {
            if (window.scrollY >= 1398 && h1Ref.current) {
                h1Ref.current.classList.add(styles.shine);
                h1Ref.current.style.opacity = '1';
                window.removeEventListener('scroll', handleScroll);
                setTimeout(() => {
                    h1Ref.current.style.backgroundImage = "linear-gradient(90deg, #fff, #fff, #fff)";
                }, 4900);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header1 />
            <div className={styles.container}>
                <div className={styles.animatedtitle}>
                    <div className={styles.texttop}>
                        <div className={styles.innerText}>
                            <span className={styles.spanner}>Get</span>
                            <span>to</span>
                        </div>
                    </div>
                    <div className={styles.textbottom}>
                        <div className={styles.innerText}><p style={{ color: "red" }}>know</p>me</div>
                    </div>
                </div>
            </div>
            <ScrollDownArrow />
            <div className={styles.hero}>
                <div className={styles.text}>
                    <p>
                        As a dedicated Computer Science student at PES University, I am deeply passionate about leveraging my skills and knowledge in web development to contribute to innovative and impactful projects. Over the course of my studies, I have gained proficiency in a variety of programming languages including C, Python, JavaScript, and HTML. My expertise in these languages has enabled me to adeptly translate complex concepts into practical and effective solutions. I am constantly striving to expand my skill set and stay abreast of the latest technological advancements. You can explore some of my projects and see my progress on my <Link style={{ color: "red" }} href="https://github.com/aryanmallik">GitHub</Link>, where I showcase my commitment to continuous learning and development.
                    </p>
                </div>
                <div className={styles.picDiv}>
                    <img className={styles.pic} src="./about1.jpg" />
                </div>
            </div>
            <div className={styles.education}>
                <h1>
                    Education
                </h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2018-2020</time>
                            <div className="text-lg font-black"><Link style={{ color: "red" }} target="_blank" href="https://south.dpsbangalore.edu.in/">Delhi Public School Bangalore South</Link></div>
                            Completed my secondary education at DPS<br />
                            Activites: Student Representative · MUN · Scouts · Stand-Up Comedy <br /> Photography · Football
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2020-2022</time>
                            <div className="text-lg font-black"><Link style={{ color: "red" }} target="_blank" href="https://south.dpsbangalore.edu.in/">Delhi Public School</Link></div>
                            Completed my upper secondary education at DPS<br />
                            PCMC<br />
                            Skills: Python ·  SQL · C (basics)
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2022-2026</time>
                            <div className="text-lg font-black"><Link style={{ color: "red" }} href="https://pes.edu/" target="_blank">PES University Electronic City</Link></div>
                            Pursuing B.Tech CSE at PES.<br />
                            Skills: Next.js · React.js · Data Structures · C (Programming Language) <br /> Python (Programming Language) · Algorithm Design ·  Node.js · HTML <br /> Cascading Style Sheets (CSS)
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
            <div className={styles.skill}>
        <p>My Skills</p>
                <div className={styles.skillcontain}>
        <Skill name="Html"/>
        <Skill name="Css"/>
        <Skill name="Javascript"/>
        <Skill name="C Programming"/>
        <Skill name="Next.js"/>
        <Skill name="React.js"/>
        <Skill name="Python"/>
        <Skill name="Photography"/>
        <Skill name="Node.js"/>
        <Skill name="DBMS"/>
        <Skill name="Version control"/>
                </div>
            </div>
            <div className={styles.projects}>
                <h1 ref={h1Ref}>
                    Projects
                </h1>
                <div className={styles.projectContainer}>
                    <Card
                        badge="Next.js"
                        title="Portfolio website for Event company"
                        footer="https://the-perfect-plan.vercel.app/"
                        backContent="The Perfect Plan"
                    />
                    <Card
                        badge="Next.js"
                        title="Portfolio website for jewellery company"
                        footer="https://avanea.vercel.app/"
                        backContent="Avanea"
                    />
                    <Card
                        badge="Next.js"
                        title="Portfolio website for myslef"
                        footer="https://aryan-mallik.vercel.app/"
                        backContent="Resume (This Project)"
                    />
                    <Card
                        badge="Html, CSS & Js"
                        title="Rock paper scissor using html css and JS"
                        footer="https://aryanmallik.github.io/rockpaperscissor/"
                        backContent="Rock Paper Scissor"
                    />
                    <Card
                        badge="Html, CSS & Js"
                        title="SketchBoard using DOM manipulation"
                        footer="https://github.com/Aryanmallik/sketchboard"
                        backContent="SketchBoard"
                    />
                    <Card
                        badge="Html, CSS & Js"
                        title="Youtube video player using Google's API"
                        footer="https://aryanmallik.github.io/youtube-player/"
                        backContent="Youtube Video Player"
                    />
                    <Card
                        badge="C"
                        title="Checks for open ports between server and client"
                        footer="https://github.com/Aryanmallik/sslPortScanner"
                        backContent="IP Port Scanner"
                    />
                </div>
            </div>
        </>
    );
};

export default About;

