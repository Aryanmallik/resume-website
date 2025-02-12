"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import styles from "../styles/Moon.module.css";
import "./moon.css";

const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";

async function fetchMoonPhase() {
    try {
        const response = await fetch("https://api.ipgeolocation.io/astronomy?apiKey=a1d7bb8a691b4b2ca931b938da1b4df2");
        const data = await response.json();
        return data.moon_phase;
    } catch (error) {
        console.error("Error fetching moon phase:", error);
        return "Unknown";
    }
}

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
    const [phase, setPhase] = useState("Loading...");

    useEffect(() => {
        fetchMoonPhase().then(setPhase);
    }, []);

    return (
        <div className="moon">
            <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
                {phase === "FULL_MOON" && <directionalLight position={[0, 0, 5]} intensity={1.5} />}
                {phase === "WANING_CRESCENT" && <directionalLight position={[-100, 0, -50]} intensity={4.5} />}
                {phase === "WAXING_CRESCENT" && <directionalLight position={[100, 0, -50]} intensity={4.5} />}
                {phase === "NEW_MOON" && <ambientLight intensity={0.2} />}
                {phase === "WAXING_GIBBOUS" && <directionalLight position={[100, 0, 50]} intensity={1.5} />}
                {phase === "WANING_GIBBOUS" && <directionalLight position={[-100, 0, 50]} intensity={1.5} />}
                {phase === "FIRST_QUARTER" && <directionalLight position={[60, 0, 5]} intensity={2.9} />}
                {phase === "LAST_QUARTER" && <directionalLight position={[-60, 0, 5]} intensity={2.9} />}

                <hemisphereLight color={0xffffff} groundColor={0xffffff} intensity={0.1} />
                <OrbitControls enablePan={false} />
                <Moon phase={phase} />
            </Canvas>
            <p className="text">Current phase: {phase}</p>
        </div>
    );
};

export default MoonScene;

