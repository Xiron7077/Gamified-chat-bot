'use client'

import { TypeAnimation } from 'react-type-animation';

export default function TextType() {
  return (
    <TypeAnimation
      sequence={[
        'Your very own\npersonal AI companion.',
        2000,
        "Your very own\npersonal AI friend.",
        2000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '4em', display: 'inline-block', fontFamily: "Poppins", color:"white", whiteSpace:"pre-line", textAlign:"center"}}
      repeat={Infinity}
    />
  );
};