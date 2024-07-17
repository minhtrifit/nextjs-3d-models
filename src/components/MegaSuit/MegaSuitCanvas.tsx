"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import MegaSuit from "./MegaSuit";

const MegaSuitCanvas = () => {
  return (
    <div className="h-[800px] px-6">
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={10} />
          <directionalLight position={[0, 1, 0]} intensity={10} />
          <directionalLight position={[0, -1, 0]} intensity={10} />
          <ambientLight intensity={10} />
          <MegaSuit />
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

export default MegaSuitCanvas;
