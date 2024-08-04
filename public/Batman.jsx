/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 batman.glb --transform 
Files: batman.glb [440.57KB] > /Users/divyambansal/Desktop/Summer 2024/Landing Pages/bananas/public/batman-transformed.glb [131.43KB] (70%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/batman-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={0.05}>
        <mesh geometry={nodes.Batman_1.geometry} material={materials.Color_26} />
        <mesh geometry={nodes.Batman_2.geometry} material={materials.Color_24} />
        <mesh geometry={nodes.Batman_3.geometry} material={materials.Color_26_56630_bump} />
        <mesh geometry={nodes.Batman_4.geometry} material={materials.Decoration_3626d783} />
        <mesh geometry={nodes.Batman_5.geometry} material={materials.Decoration_3814d676} />
      </group>
    </group>
  )
}

useGLTF.preload('/batman-transformed.glb')