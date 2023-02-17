import React, { useEffect, useMemo, useRef } from "react";
import { useTexture } from "@react-three/drei";

const Points = () => {

    const texture = useTexture('/textures/circle.png');


    const count = 100;
    const sep = 3;

    const positions = useMemo(() => {

        const positions = []

        for(let xi = 0; xi < count; xi++) {
            for(let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / 2);
                let z = sep * (zi - count / 2);
                let y = 0;

                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep]);

    const pointsRef = useRef(null);

    useEffect(() => {
        console.log(pointsRef);
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach='geometry'
            >
                <bufferAttribute 
                    attach='attributes-position'
                    array={positions}
                    itemSize={3}
                    count = {positions.lenght / 3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach='material'
                map={texture}
                color={'white'}
                size={1.5}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    )
}

export default Points;