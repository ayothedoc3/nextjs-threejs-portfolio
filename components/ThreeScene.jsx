// components/ThreeScene.jsx
'use client';

import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';

function Model(props) {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  const handlePointerOver = () => {
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };
  
  const handleClick = () => {
    if (props.onClick) props.onClick();
  };
  
  return (
    <group {...props}>
      <mesh 
        ref={mesh}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color={hovered ? '#ff55ff' : '#5588ff'} 
          wireframe={true}
          emissive={hovered ? '#440044' : '#000066'}
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.2}
          roughness={0.1}
          emissive={hovered ? '#220066' : '#001133'}
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

import { useInteractionStore } from '../stores/interactionStore';

export default function ThreeScene() {
  const incrementInteractions = useInteractionStore((state) => state.incrementInteractions);
  const interactions = useInteractionStore((state) => state.interactions);
  
  return (
    <div className="h-full w-full relative">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model onClick={incrementInteractions} />
          </Float>
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={1.5} 
            far={5} 
          />
          <OrbitControls 
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
