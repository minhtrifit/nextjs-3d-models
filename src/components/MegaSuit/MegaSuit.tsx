"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const MegaSuit = (props: any) => {
  const { nodes, materials }: any = useGLTF(
    "/iron-man_mark_85__damage_battle_edition.glb"
  );

  const modelRef: any = useRef();

  useFrame(() => {
    if (modelRef.current) modelRef.current.rotation.y += 0.01;
  });

  return (
    <group {...props} ref={modelRef} position={[0, -3, 0]} dispose={null}>
      <group scale={0.08}>
        <group position={[0.011, 49.846, 6.908]} scale={0.018}>
          <group position={[0, -2712.059, -399.272]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Arc_Reactor_Arc_Reactor_0.geometry}
              material={materials.Arc_Reactor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Arc_Reactor_Arc_Reactor_0_1.geometry}
              material={materials.Arc_Reactor}
            />
          </group>
        </group>
        <group position={[0.131, 33.025, 1.571]} scale={0.018}>
          <group position={[-6.558, -1793.766, -107.94]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0.geometry}
              material={materials.Red_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0_1.geometry}
              material={materials.Red_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0_2.geometry}
              material={materials.Red_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0_3.geometry}
              material={materials.Red_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0_4.geometry}
              material={materials.Red_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0_5.geometry}
              material={materials.Red_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Red_Part_Red_Part_0_6.geometry}
              material={materials.Red_Part}
            />
          </group>
        </group>
        <group position={[0.131, 40.004, 1.386]} scale={0.018}>
          <group position={[-6.558, -2174.723, -97.812]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Gold_Part_Gold_Part_0.geometry}
              material={materials.Gold_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Gold_Part_Gold_Part_0_1.geometry}
              material={materials.Gold_Part}
            />
          </group>
        </group>
        <group position={[0.131, 31.93, 1.627]} scale={0.018}>
          <group position={[-6.558, -1733.935, -110.971]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_1.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_2.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_3.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_4.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_5.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_6.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_7.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_8.geometry}
              material={materials.Silver_Part}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Silver_Part_Silver_Part_0_9.geometry}
              material={materials.Silver_Part}
            />
          </group>
        </group>
        <group position={[0.131, 46.955, 1.951]} scale={0.018}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lights_Lights_0.geometry}
            material={materials.Lights}
            position={[-6.558, -2554.223, -128.661]}
          />
        </group>
        <group position={[0.011, 49.859, 7.331]} scale={0.018}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_Glass_0.geometry}
            material={materials.Glass}
            position={[0, -2712.798, -422.35]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/iron-man_mark_85__damage_battle_edition.glb");

export default MegaSuit;
