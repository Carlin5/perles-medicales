"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * 3D Pearl scene — orbiting halo, distorted pearl mesh, leaves and sparkles.
 * Mirrors the visual of the PDF cover, expressed in 3D.
 */
function Pearl() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[1.25, 96, 96]} />
        <MeshDistortMaterial
          color="#E8EFE9"
          metalness={0.65}
          roughness={0.18}
          distort={0.18}
          speed={1.4}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function HaloRing({
  radius = 1.9,
  thickness = 0.012,
  color = "#4F9663",
  speed = 0.2,
  axis = [0, 0, 1] as [number, number, number],
}: {
  radius?: number;
  thickness?: number;
  color?: string;
  speed?: number;
  axis?: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * axis[0];
    ref.current.rotation.y += delta * speed * axis[1];
    ref.current.rotation.z += delta * speed * axis[2];
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 24, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}

function OrbitDots({ count = 60, radius = 2.4 }: { count?: number; radius?: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const dots = useMemo(() => {
    const items: { pos: [number, number, number]; size: number }[] = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      items.push({
        pos: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ],
        size: Math.random() * 0.02 + 0.01,
      });
    }
    return items;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      {dots.map((d, i) => (
        <mesh key={i} position={d.pos}>
          <sphereGeometry args={[d.size, 8, 8]} />
          <meshBasicMaterial color="#E8EFE9" />
        </mesh>
      ))}
    </group>
  );
}

export default function PearlScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.8]}
      className="!h-full !w-full"
    >
      <color attach="background" args={["#0E1728"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-3, -2, -4]} intensity={0.4} color="#2D6E3D" />
      <Suspense fallback={null}>
        <Pearl />
        <HaloRing radius={1.9} color="#4F9663" speed={0.25} axis={[0, 1, 0.2]} />
        <HaloRing
          radius={2.3}
          thickness={0.006}
          color="#74B287"
          speed={0.18}
          axis={[1, 0.3, 0]}
        />
        <HaloRing
          radius={2.8}
          thickness={0.004}
          color="#2D6E3D"
          speed={0.12}
          axis={[0.4, 0.7, 0]}
        />
        <OrbitDots />
        <Sparkles count={80} scale={[6, 6, 6]} size={2.2} color="#ffffff" />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}
