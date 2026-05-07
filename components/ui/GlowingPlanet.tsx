import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Points, PointMaterial } from '@react-three/drei';
import { Group, Mesh, MeshStandardMaterial, Vector3 } from 'three';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function createStarField(count: number) {
  const points: Vector3[] = [];
  for (let i = 0; i < count; i += 1) {
    const radius = 2.4 + Math.random() * 0.8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    points.push(new Vector3(x, y, z));
  }
  return points;
}

function Scene({ hover, pointerRef, pulseRef }: { hover: boolean; pointerRef: React.MutableRefObject<{ x: number; y: number }>; pulseRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<Group>(null!);
  const planetRef = useRef<Mesh>(null!);
  const materialRef = useRef<MeshStandardMaterial>(null!);
  const ringRef = useRef<Group>(null!);

  useFrame((state, delta) => {
    if (!groupRef.current || !planetRef.current || !materialRef.current || !ringRef.current) return;

    const targetX = pointerRef.current.y * 0.15;
    const targetY = pointerRef.current.x * 0.22;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;

    planetRef.current.rotation.y += delta * 0.16;
    planetRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.06;

    ringRef.current.rotation.y += delta * (hover ? 0.72 : 0.44);

    if (pulseRef.current > 0) {
      pulseRef.current = clamp(pulseRef.current - delta * 2.8, 0, 1);
    }

    const pulseStrength = Math.sin(pulseRef.current * Math.PI) * 0.13;
    const targetScale = 1 + (hover ? 0.04 : 0) + pulseStrength;
    planetRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.14);

    materialRef.current.emissiveIntensity = 0.7 + (hover ? 0.8 : 0.35) + pulseStrength * 1.4;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={planetRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          ref={materialRef}
          color="#081a10"
          emissive="#0cff9d"
          emissiveIntensity={0.85}
          roughness={0.18}
          metalness={0.28}
          clearcoat={0.45}
          clearcoatRoughness={0.2}
          reflectivity={0.15}
        />
      </mesh>

      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshBasicMaterial color="#0cff9d" transparent opacity={0.12} toneMapped={false} />
      </mesh>

      <mesh scale={[1.42, 1.42, 1.42]}>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshBasicMaterial color="#0cff9d" transparent opacity={0.06} toneMapped={false} />
      </mesh>

      <group ref={ringRef} position={[0, -0.08, 0]}>
        <Torus args={[1.55, 0.02, 24, 160]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial
            color="#0cff9d"
            emissive="#0cff9d"
            emissiveIntensity={0.35}
            roughness={0.18}
            metalness={0.15}
          />
        </Torus>
        <Torus args={[1.92, 0.005, 10, 180]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#05ff8f" transparent opacity={0.18} toneMapped={false} />
        </Torus>
      </group>
    </group>
  );
}

function Stars({ points }: { points: Vector3[] }) {
  return (
    <Points positions={points} frustumCulled={false}>
      <PointMaterial transparent color="#7bffb6" size={0.02} sizeAttenuation opacity={0.6} />
    </Points>
  );
}

export const GlowingPlanet = React.memo(function GlowingPlanet() {
  const [hover, setHover] = useState(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pulseRef = useRef(0);
  const stars = useMemo(() => createStarField(140), []);

  useEffect(() => {
    if (pulseRef.current > 0) return;
  }, []);

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        pulseRef.current = 1;
      }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
        pointerRef.current = { x: x * 0.45, y: y * 0.35 };
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        className="h-full w-full"
      >
        <color attach="background" args={["#030708"]} />
        <fog attach="fog" args={["#030708", 6, 16]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[2, 2.5, 2]} intensity={1.1} color="#82ffb7" />
        <directionalLight position={[-3, 1, 2]} intensity={0.25} color="#50ff91" />
        <Scene hover={hover} pointerRef={pointerRef} pulseRef={pulseRef} />
        <Stars points={stars} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,_rgba(0,255,150,0.09),transparent_40%)]" />
    </div>
  );
});
