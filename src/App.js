import { Canvas } from "@react-three/fiber";
import Section from "./Components/Section";


function App() {
  return (
    <>
      <div className="w-screen h-screen z-0 bg-black fixed top-0 left-0">
        <Canvas>
          <directionalLight color={'#FFFFFF'} intensity={1} />
          <mesh>
            <boxGeometry args={[1, 1, 1]}/>
            <meshBasicMaterial color={'green'} />
          </mesh>
        </Canvas>
      </div>
      <div className="w-screen z-100 relative">
        <Section sectionNumber={'One'} />
        <Section sectionNumber={'Two'} />
        <Section sectionNumber={'Three'} />
        <Section sectionNumber={'Four'} />
        <Section sectionNumber={'Five'} />
      </div>
    </>
  );
}

export default App;
