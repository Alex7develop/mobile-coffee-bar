"use client";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { MeshWobbleMaterial, OrbitControls, SpotLight, SoftShadows } from "@react-three/drei";

export default function HeroBackground() {
  return (
    <div style={{position: 'absolute', inset: 0, zIndex: 0, width:'100%', height:'100%', pointerEvents:'none', filter:'blur(1px) brightness(0.9)'}}>
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={0.5} />
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.45, 128, 32]} />
          <MeshWobbleMaterial
            color="#c9baa5"
            factor={2}
            speed={0.55}
            metalness={0.4}
            roughness={0.5}
            transparent={true}
            opacity={0.38}
          />
        </mesh>
        <mesh position={[-2.5, 0, -1]}>
          <sphereGeometry args={[1.1, 64, 64]} />
          <MeshWobbleMaterial
            color="#cab6eb"
            factor={1.3}
            speed={0.7}
            metalness={0.6}
            roughness={0.7}
            transparent={true}
            opacity={0.22}
          />
        </mesh>
        <mesh position={[2.7, -1, 0]}>
          <sphereGeometry args={[0.72, 64, 64]} />
          <MeshWobbleMaterial
            color="#ffe6bb"
            factor={1.5}
            speed={1}
            metalness={0.2}
            roughness={0.9}
            transparent={true}
            opacity={0.21}
          />
        </mesh>
        <SoftShadows />
      </Canvas>
    </div>
  );
}

