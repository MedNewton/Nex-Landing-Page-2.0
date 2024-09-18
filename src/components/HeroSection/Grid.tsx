import React from 'react';
import { Instances, Instance } from '@react-three/drei';


interface GridProps {
  number?: number;
  lineWidth?: number;
  height?: number;
  mode?: string;
}



const Grid: React.FC<GridProps> = ({ number = 23, lineWidth = 0.026, height = 0.5, mode }) => (
  
  <Instances position={[0, -1.02, 0]} receiveShadow={false}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#053E43" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group key={`${x}:${y}`} position={[x * 2 - Math.floor(number / 2) * 2, -0.01, y * 2 - Math.floor(number / 2) * 2]}>
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    <gridHelper receiveShadow={false} args={[100, 100, '#bbb', '#bbb']} position={[0, -0.01, 0]} />
  </Instances>
);

export default Grid;
