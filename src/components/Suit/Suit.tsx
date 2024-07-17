"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Suit = (props: any) => {
  const { nodes, materials }: any = useGLTF("/iron_man.glb");
  const modelRef: any = useRef();

  useFrame(() => {
    if (modelRef.current) modelRef.current.rotation.y += 0.01;
  });

  return (
    <group {...props} ref={modelRef} position={[0, -2, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.6}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["default"]}
            position={[0.008, 3.219, 0.075]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials["default"]}
            position={[-0.004, 6.091, -0.517]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials["default"]}
            position={[0, 5.151, 0.654]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials["default"]}
            position={[0.507, 3.462, 0.606]}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials["default"]}
            position={[-0.507, 3.462, 0.606]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials["default"]}
            position={[-0.634, 5.7, 0.467]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["default"]}
            position={[0, 5.42, 0.748]}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["default"]}
            position={[-0.005, 5.003, -0.174]}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["default"]}
            position={[0, 4.914, 0.615]}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials["default"]}
            position={[-0.003, 4.659, 0.569]}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials["default"]}
            position={[0, 6.595, -0.707]}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials["default"]}
            position={[0, 6.499, 0.309]}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials["default"]}
            position={[0.678, 6.639, -0.08]}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials["default"]}
            position={[0.464, 6.697, 0.283]}
          />
          <mesh
            geometry={nodes.Object_34.geometry}
            material={materials["default"]}
            position={[-0.475, 6.694, 0.279]}
          />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials["default"]}
            position={[-0.682, 6.613, -0.042]}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials["default"]}
            position={[-0.409, 6.484, 0.441]}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials["default"]}
            position={[0.046, 6.235, -0.102]}
          />
          <mesh
            geometry={nodes.Object_42.geometry}
            material={materials["default"]}
            position={[-0.445, 3.301, -0.29]}
          />
          <mesh
            geometry={nodes.Object_44.geometry}
            material={materials["default"]}
            position={[0.451, 3.292, -0.286]}
          />
          <mesh
            geometry={nodes.Object_46.geometry}
            material={materials["default"]}
            position={[0, 5.151, -0.426]}
          />
          <mesh
            geometry={nodes.Object_48.geometry}
            material={materials["default"]}
            position={[0, 5.094, 0.55]}
          />
          <mesh
            geometry={nodes.Object_50.geometry}
            material={materials["default"]}
            position={[0, 4.933, -0.412]}
          />
          <mesh
            geometry={nodes.Object_52.geometry}
            material={materials["default"]}
            position={[-0.005, 4.737, -0.429]}
          />
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials["default"]}
            position={[-0.001, 4.511, -0.495]}
          />
          <mesh
            geometry={nodes.Object_56.geometry}
            material={materials["default"]}
            position={[-0.451, 4.721, 0.38]}
          />
          <mesh
            geometry={nodes.Object_58.geometry}
            material={materials["default"]}
            position={[-0.54, 5.306, 0.39]}
          />
          <mesh
            geometry={nodes.Object_60.geometry}
            material={materials["default"]}
            position={[0.516, 5.121, 0.382]}
          />
          <mesh
            geometry={nodes.Object_62.geometry}
            material={materials["default"]}
            position={[0.489, 4.927, 0.379]}
          />
          <mesh
            geometry={nodes.Object_64.geometry}
            material={materials["default"]}
            position={[0.445, 4.721, 0.385]}
          />
          <mesh
            geometry={nodes.Object_66.geometry}
            material={materials["default"]}
            position={[-0.487, 4.924, 0.38]}
          />
          <mesh
            geometry={nodes.Object_68.geometry}
            material={materials["default"]}
            position={[-0.516, 5.121, 0.382]}
          />
          <mesh
            geometry={nodes.Object_70.geometry}
            material={materials["default"]}
            position={[0.543, 5.318, 0.367]}
          />
          <mesh
            geometry={nodes.Object_72.geometry}
            material={materials["default"]}
            position={[0.409, 6.484, 0.441]}
          />
          <mesh
            geometry={nodes.Object_74.geometry}
            material={materials["default"]}
            position={[0, 6.331, -0.81]}
          />
          <mesh
            geometry={nodes.Object_76.geometry}
            material={materials["default"]}
            position={[-0.001, 6.872, -0.459]}
          />
          <mesh
            geometry={nodes.Object_78.geometry}
            material={materials["default"]}
            position={[0, 6.995, -0.044]}
          />
          <mesh
            geometry={nodes.Object_80.geometry}
            material={materials["default"]}
            position={[0, 6.842, -0.047]}
          />
          <mesh
            geometry={nodes.Object_82.geometry}
            material={materials["default"]}
            position={[-0.001, 6.729, -0.089]}
          />
          <mesh
            geometry={nodes.Object_84.geometry}
            material={materials["default"]}
            position={[0.635, 5.692, 0.463]}
          />
          <mesh
            geometry={nodes.Object_86.geometry}
            material={materials["default"]}
            position={[-1.064, 6.429, -0.026]}
          />
          <mesh
            geometry={nodes.Object_88.geometry}
            material={materials["default"]}
            position={[-1.444, 4.8, -0.067]}
          />
          <mesh
            geometry={nodes.Object_90.geometry}
            material={materials["default"]}
            position={[1.543, 4.379, 0.054]}
          />
          <mesh
            geometry={nodes.Object_92.geometry}
            material={materials["default"]}
            position={[-1.076, 5.596, -0.165]}
          />
          <mesh
            geometry={nodes.Object_94.geometry}
            material={materials["default"]}
            position={[0.002, 7.299, 0.46]}
          />
          <mesh
            geometry={nodes.Object_96.geometry}
            material={materials["default"]}
            position={[1.077, 5.587, -0.165]}
          />
          <mesh
            geometry={nodes.Object_98.geometry}
            material={materials["default"]}
            position={[-0.212, 7.346, 0.029]}
          />
          <mesh
            geometry={nodes.Object_100.geometry}
            material={materials["default"]}
            position={[0.663, 0.81, -0.07]}
          />
          <mesh
            geometry={nodes.Object_102.geometry}
            material={materials["default"]}
            position={[0, 6.097, 0.671]}
          />
          <mesh
            geometry={nodes.Object_104.geometry}
            material={materials["default"]}
            position={[-0.745, 0.094, 0.464]}
          />
          <mesh
            geometry={nodes.Object_106.geometry}
            material={materials["default"]}
            position={[0.211, 7.344, 0.027]}
          />
          <mesh
            geometry={nodes.Object_108.geometry}
            material={materials["default"]}
            position={[-0.645, 1.166, -0.204]}
          />
          <mesh
            geometry={nodes.Object_110.geometry}
            material={materials["default"]}
            position={[-0.708, 0.414, 0.237]}
          />
          <mesh
            geometry={nodes.Object_112.geometry}
            material={materials["default"]}
            position={[-0.644, 0.111, -0.15]}
          />
          <mesh
            geometry={nodes.Object_114.geometry}
            material={materials["default"]}
            position={[-1.69, 4.214, 0.117]}
          />
          <mesh
            geometry={nodes.Object_116.geometry}
            material={materials["default"]}
            position={[-1.517, 4.115, 0.111]}
          />
          <mesh
            geometry={nodes.Object_118.geometry}
            material={materials["default"]}
            position={[-1.672, 3.787, 0.325]}
          />
          <mesh
            geometry={nodes.Object_120.geometry}
            material={materials["default"]}
            position={[-1.695, 3.752, 0.165]}
          />
          <mesh
            geometry={nodes.Object_122.geometry}
            material={materials["default"]}
            position={[-1.663, 3.776, 0.012]}
          />
          <mesh
            geometry={nodes.Object_124.geometry}
            material={materials["default"]}
            position={[-1.583, 3.847, -0.119]}
          />
          <mesh
            geometry={nodes.Object_126.geometry}
            material={materials["default"]}
            position={[1.064, 6.429, -0.026]}
          />
          <mesh
            geometry={nodes.Object_128.geometry}
            material={materials["default"]}
            position={[-1.458, 4.068, 0.403]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/iron_man.glb");

export default Suit;
