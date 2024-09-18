"use client"

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { forwardRef } from "react";
import { MeshMatcapMaterial } from "three";

export const CustomMaterial = forwardRef<MeshMatcapMaterial, JSX.IntrinsicElements["meshMatcapMaterial"]>(
  (props, ref) => {
    const matcapTexture = useLoader(TextureLoader, "/media/texture1.jpeg");
    
    return (
      <meshMatcapMaterial
        {...props}
        ref={ref}
        matcap={matcapTexture}
      />
    );
  }
);

CustomMaterial.displayName = "CustomMaterial";
