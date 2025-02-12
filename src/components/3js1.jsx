"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import styles from '../styles/Moon.module.css';
import "./moon.css";
const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";

const cycle = 29.53;
const newMoon = new Date(2025, 1, 28);

const getMoonPhase = () => {
    const today = new Date();
    const diff = Math.abs(today - newMoon) / (1000 * 60 * 60 * 24);
    console.log(diff)
    const cyclePosition = (diff % cycle) / cycle;
    console.log("cycle", cyclePosition)
    let min = Infinity;
    let minimum;
    if (Math.abs(cyclePosition - 0.25) < min) {
        minimum = "First Quarter";
        min = cyclePosition-0.25;
    }
    if (Math.abs(cyclePosition - 0.5) < min) {
        minimum = "Full Moon";
        min = cyclePosition-0.5;
    }
    if (Math.abs(cyclePosition - 0.75) < min) {
        minimum = "Third Quarter";
        min = cyclePosition-0.75;
    }
    if (Math.abs(cyclePosition - 0.1) < min) {
        minimum = "New Moon";
    }
    return minimum;
};

function Moon({ phase }) {
    const texture = useLoader(THREE.TextureLoader, textureURL);
    const displacementMap = useLoader(THREE.TextureLoader, displacementURL);
    const moonRef = useRef();

    useFrame(() => {
        if (moonRef.current) {
            moonRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={moonRef} scale={2} rotation={[Math.PI * 0.02, Math.PI * 1.54, 0]}>
            <sphereGeometry args={[1, 60, 60]} />
            <meshPhongMaterial
                map={texture}
                displacementMap={displacementMap}
                displacementScale={0}
                bumpMap={displacementMap}
                bumpScale={2.5}
                shininess={phase === "Full Moon" ? 10 : 0}
            />
        </mesh>
    );
}

const MoonScene = () => {
    const [phase, setPhase] = useState("New Moon");

    useEffect(() => {
        setPhase(getMoonPhase());
    }, []);

    return (
        <div className="moon">
            <Canvas camera={{ position: [0, 0, 7], fov: 75 }} >
                {phase === "Full Moon" && <directionalLight position={[0, 0, 5]} intensity={1.5} />}
                {phase === "New Moon" && <ambientLight intensity={0.2} />}
                {phase === "First Quarter" && <directionalLight position={[150, 0, 20]} intensity={1.5} />}
                {phase === "Third Quarter" && <directionalLight position={[-150, 0, 40]} intensity={1.5} />}

                <hemisphereLight color={0xffffff} groundColor={0xffffff} intensity={0.1} />
                <OrbitControls enablePan={false} />
                <Moon phase={phase} />
            </Canvas>
            <p className="text">Current phase: {phase}</p>
        </div>
    );
};

export default MoonScene;

