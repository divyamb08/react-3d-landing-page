import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from "@react-three/drei"
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"

function Batman({ z }){
  const ref = useRef()
  const { nodes, materials } = useGLTF('/batman-transformed.glb')
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0,0,z])
  const [data] = useState({
    x:THREE.MathUtils.randFloatSpread(8),
    y:THREE.MathUtils.randFloatSpread(height),
    rX:Math.random()*Math.PI,
    rY:Math.random()*Math.PI,
    rZ:Math.random()*Math.PI
  })




  useFrame((state) => {
    ref.current.position.set(data.x * viewport.width, (data.y+=0.025), z)
    ref.current.rotation.set(data.rX += 0.001, data.rY+=0.001, data.rZ+=0.001)
    if (data.y> height/1.5){
      data.y = -height/1.5
    }
  })

  return(
  <mesh ref={ref}>
    <group rotation={[Math.PI*-1.5, Math.PI, -Math.PI]} scale={0.09}>
        <mesh geometry={nodes.Batman_1.geometry} material={materials.Color_26} />
        <mesh geometry={nodes.Batman_2.geometry} material={materials.Color_24} />
        <mesh geometry={nodes.Batman_3.geometry} material={materials.Color_26_56630_bump} />
        <mesh geometry={nodes.Batman_4.geometry} material={materials.Decoration_3626d783} />
        <mesh geometry={nodes.Batman_5.geometry} material={materials.Decoration_3814d676} />
      </group>
  </mesh>
  )
}


export default function App({ count = 100, depth=50 }) {
  return (
  <Canvas gl={{alpha: false}} camera={{ near:0.01, far:110, fov:30 }}>
    <color attach="background" args={["#00b4d8"]} />
    {/* <ambientLight intensity={0.4} />
    <spotLight position={[100, 10, 10]} intensity={0.5} /> */}
    
    <Suspense fallback={null}>
    {Array.from({length:count}, (_,i)=>(<Batman key={i} z={(-i/count)*depth - 20} />))}

      <Batman scale={0.6}/>
      <EffectComposer>
        <DepthOfField target={[0,0,depth/2]} bokehScale={5} focalLength={0.3} height={700}/>
      </EffectComposer>
      <Environment preset="sunset"/>
    </Suspense>
  </Canvas> 
  )
}
