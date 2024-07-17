"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Suit from "./Suit";

const SuitCanvas = () => {
  return (
    <div className="h-[800px] px-6">
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <directionalLight position={[-1, -1, -1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <Suit />
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableRotate
            enableZoom={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SuitCanvas;
