'use client'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';

const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";

function Moon() {
  const texture = useLoader(THREE.TextureLoader, textureURL);
  const displacementMap = useLoader(THREE.TextureLoader, displacementURL);
  const moonRef = useRef();

  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002;
      moonRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <mesh ref={moonRef} scale={2} rotation={[Math.PI * 0.02, Math.PI * 1.54, 0]}>
      <sphereGeometry args={[1, 60, 60]} />
      <meshPhongMaterial 
        map={texture} 
        displacementMap={displacementMap} 
        displacementScale={0.06} 
        bumpMap={displacementMap} 
        bumpScale={0.04} 
        reflectivity={0} 
        shininess={0} 
      />
    </mesh>
  );
}

export function MoonScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <directionalLight position={[-100, 10, 50]} intensity={1} />
      <hemisphereLight color={0xffffff} groundColor={0xffffff} intensity={0.1} />
      <OrbitControls enablePan={false} />
      <Moon />
    </Canvas>
  );
}

