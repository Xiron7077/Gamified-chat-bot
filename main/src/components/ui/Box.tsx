import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Object3D } from 'three';

export default function Box(props: any) {
  const ref = useRef<Object3D | undefined>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (ref.current) {
      (ref.current as Object3D).rotation.x += delta; 
    }
  });

  const handleOnClick = (event: React.MouseEvent) => {
    setClicked(!clicked);
  };

  const handlePointerOver = (event: React.PointerEvent) => {
    event.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (event: React.PointerEvent) => {
    setHovered(false);
  };

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={handleOnClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
