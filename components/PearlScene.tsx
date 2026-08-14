"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import {
  Component,
  type ReactNode,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

type PearlSceneErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type PearlSceneErrorBoundaryState = {
  hasError: boolean;
};

class PearlSceneErrorBoundary extends Component<
  PearlSceneErrorBoundaryProps,
  PearlSceneErrorBoundaryState
> {
  state: PearlSceneErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): PearlSceneErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function supportsWebGL() {
  if (typeof document === "undefined") return false;

  const canvas = document.createElement("canvas");

  return Boolean(
    canvas.getContext("webgl2") || canvas.getContext("webgl"),
  );
}

export function PearlFallback() {
  return (
    <div
      role="img"
      aria-label="A pearl surrounded by green halo rings"
      className="relative isolate grid h-full w-full place-items-center overflow-hidden bg-[#0E1728]"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-forest-500/10 blur-3xl"
      />
      <svg
        aria-hidden
        viewBox="0 0 520 520"
        className="relative h-[min(122vw,38rem)] w-[min(122vw,38rem)] max-w-none translate-x-[18%] drop-shadow-[0_0_24px_rgba(116,178,135,0.35)] md:translate-x-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="fallback-pearl" cx="34%" cy="28%" r="72%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="32%" stopColor="#E8EFE9" />
            <stop offset="72%" stopColor="#B9C9BD" />
            <stop offset="100%" stopColor="#6B8A73" />
          </radialGradient>
          <linearGradient id="fallback-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#74B287" stopOpacity="0.2" />
            <stop offset="48%" stopColor="#B9E3C5" />
            <stop offset="100%" stopColor="#2D6E3D" stopOpacity="0.2" />
          </linearGradient>
          <filter id="fallback-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
          <filter id="fallback-pearl-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="14"
              floodColor="#07101F"
              floodOpacity="0.55"
            />
          </filter>
        </defs>

        <circle
          cx="260"
          cy="260"
          r="168"
          stroke="#74B287"
          strokeOpacity="0.58"
          strokeWidth="2"
        />
        <circle
          cx="260"
          cy="260"
          r="204"
          stroke="url(#fallback-ring)"
          strokeWidth="3"
          strokeDasharray="3 10"
          opacity="0.95"
        />
        <ellipse
          cx="260"
          cy="260"
          rx="236"
          ry="116"
          transform="rotate(-24 260 260)"
          stroke="#74B287"
          strokeOpacity="0.7"
          strokeWidth="3"
        />
        <ellipse
          cx="260"
          cy="260"
          rx="236"
          ry="116"
          transform="rotate(54 260 260)"
          stroke="#4F9663"
          strokeOpacity="0.78"
          strokeWidth="2"
        />
        <circle
          cx="260"
          cy="260"
          r="140"
          fill="#74B287"
          opacity="0.42"
          filter="url(#fallback-glow)"
        />
        <circle
          cx="260"
          cy="260"
          r="108"
          fill="url(#fallback-pearl)"
          filter="url(#fallback-pearl-shadow)"
        />
        <circle
          cx="260"
          cy="260"
          r="114"
          stroke="#E8EFE9"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        <ellipse
          cx="228"
          cy="218"
          rx="34"
          ry="25"
          transform="rotate(-28 228 218)"
          fill="#FFFFFF"
          opacity="0.72"
        />
        <circle cx="216" cy="204" r="10" fill="#FFFFFF" opacity="0.9" />
        <path
          d="M260 163v-34M260 391v-34M163 260h-34M391 260h-34"
          stroke="#E8EFE9"
          strokeLinecap="round"
          strokeOpacity="0.8"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

/**
 * 3D Pearl scene — orbiting halo, distorted pearl mesh, leaves and sparkles.
 * Mirrors the visual of the PDF cover, expressed in 3D.
 */
function Pearl({ lowPower }: { lowPower: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow={!lowPower} receiveShadow={!lowPower}>
        <sphereGeometry args={[1.25, lowPower ? 48 : 96, lowPower ? 48 : 96]} />
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
  lowPower = false,
}: {
  radius?: number;
  thickness?: number;
  color?: string;
  speed?: number;
  axis?: [number, number, number];
  lowPower?: boolean;
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
      <torusGeometry
        args={[radius, thickness, lowPower ? 16 : 24, lowPower ? 120 : 200]}
      />
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

function PearlCanvas({
  lowPower,
  onContextLost,
}: {
  lowPower: boolean;
  onContextLost: (event: Event) => void;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={lowPower ? [1, 1.15] : [1, 1.8]}
      className="!h-full !w-full"
      onCreated={({ gl }) => {
        gl.domElement.addEventListener("webglcontextlost", onContextLost, {
          once: true,
        });
      }}
    >
      <color attach="background" args={["#0E1728"]} />
      <ambientLight intensity={0.55} />
      <hemisphereLight args={["#E8EFE9", "#0E1728", 0.8]} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow={!lowPower} />
      <directionalLight position={[-4, 1, 3]} intensity={0.8} color="#C7E8D0" />
      <pointLight position={[-3, -2, -4]} intensity={0.6} color="#2D6E3D" />
      <Suspense fallback={null}>
        <Pearl lowPower={lowPower} />
        <HaloRing
          radius={1.9}
          color="#4F9663"
          speed={0.25}
          axis={[0, 1, 0.2]}
          lowPower={lowPower}
        />
        <HaloRing
          radius={2.3}
          thickness={0.006}
          color="#74B287"
          speed={0.18}
          axis={[1, 0.3, 0]}
          lowPower={lowPower}
        />
        <HaloRing
          radius={2.8}
          thickness={0.004}
          color="#2D6E3D"
          speed={0.12}
          axis={[0.4, 0.7, 0]}
          lowPower={lowPower}
        />
        {!lowPower && <OrbitDots />}
        {!lowPower && (
          <Sparkles count={80} scale={[6, 6, 6]} size={2.2} color="#ffffff" />
        )}
        <Environment resolution={128}>
          <Lightformer
            intensity={2.5}
            color="#F4FFF7"
            position={[4, 4, 3]}
            scale={[5, 5, 1]}
          />
          <Lightformer
            intensity={1.5}
            color="#B9E3C5"
            position={[-4, 1, 2]}
            scale={[3, 4, 1]}
          />
          <Lightformer
            intensity={1.2}
            color="#FFFFFF"
            position={[0, -2, -4]}
            scale={[4, 2, 1]}
          />
        </Environment>
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

export default function PearlScene() {
  const [mediaReady, setMediaReady] = useState(false);
  const [lowPower, setLowPower] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [contextLost, setContextLost] = useState(false);

  useEffect(() => {
    const smallViewport = window.matchMedia("(max-width: 767px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMedia = () => {
      setLowPower(smallViewport.matches);
      setPrefersReducedMotion(reducedMotion.matches);
      setMediaReady(true);
    };

    updateMedia();
    smallViewport.addEventListener("change", updateMedia);
    reducedMotion.addEventListener("change", updateMedia);
    return () => {
      smallViewport.removeEventListener("change", updateMedia);
      reducedMotion.removeEventListener("change", updateMedia);
    };
  }, []);

  useEffect(() => {
    setWebglAvailable(supportsWebGL());
  }, []);

  const handleContextLost = useCallback((event: Event) => {
    event.preventDefault();
    setContextLost(true);
  }, []);

  if (!mediaReady || !webglAvailable || prefersReducedMotion || contextLost) {
    return <PearlFallback />;
  }

  return (
    <PearlSceneErrorBoundary fallback={<PearlFallback />}>
      <PearlCanvas lowPower={lowPower} onContextLost={handleContextLost} />
    </PearlSceneErrorBoundary>
  );
}
