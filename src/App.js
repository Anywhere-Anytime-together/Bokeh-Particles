import { Canvas } from "@react-three/fiber";
import Section from "./Components/Section";
import Scene from "./Components/Scene";
import Points from "./Components/Points";
import { OrbitControls } from "@react-three/drei";


function App() {
  return (
    <>
      <div className="w-screen h-screen z-0 bg-black fixed top-0 left-0">
        <Canvas>
          <OrbitControls />
          <directionalLight color={'#FFFFFF'} intensity={1} position={[0, 5, 5]} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          <Points />
        </Canvas>
      </div>
      {/* <div className="w-screen z-100 relative">
        <Section sectionNumber={'One'} />
        <Section sectionNumber={'Two'} />
        <Section sectionNumber={'Three'} />
        <Section sectionNumber={'Four'} />
        <Section sectionNumber={'Five'} />
      </div> */}
    </>
  );
}

export default App;
