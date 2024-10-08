import React from 'react';
import { useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { Text3D, MeshTransmissionMaterial } from '@react-three/drei';
import { Center } from '@react-three/drei';
import Grid from './Grid';
import { useTheme } from "next-themes";

interface TextProps {
  children: React.ReactNode;
  config?: React.ComponentProps<typeof MeshTransmissionMaterial>;
  font?: string;
  [key: string]: unknown;
}

const TextModel: React.FC<TextProps> = ({ children, config, font = '/inter.json', ...props }) => {
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr');
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
        <Grid mode={currentTheme} />
      </group>
    </>
  );
};

export default TextModel;
