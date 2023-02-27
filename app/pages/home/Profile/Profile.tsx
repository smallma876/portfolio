import Image from "next/image";
import React, { FC } from "react";
import GiantText from "../../../../components/GiantText/GiantText";
import TypingEffect from "../../../../components/TypingEffect/TypingEffect";
import { Box, Flexbox } from "../../../../shared/components/Flexbox/Flexbox";
import { Palette } from "../../../../utils/palette";

const languagesProgramming = [
  {
    src: "./images/it/css3-icon.svg",
    alt: "css3",
  },
  {
    src: "./images/it/html-icon.svg",
    alt: "html",
  },
  {
    src: "./images/it/javascript-icon.svg",
    alt: "javascript",
  },
  {
    src: "./images/it/reactjs-icon.svg",
    alt: "reactjs",
  },
  {
    src: "./images/it/angular-icon.svg",
    alt: "angular",
  },
  {
    src: "./images/it/typescript-icon.svg",
    alt: "typescript",
  },
  {
    src: "./images/it/nextjs-icon.svg",
    alt: "nextjs",
  },
  {
    src: "./images/it/git-icon.svg",
    alt: "git",
  },
];

interface ProfileProps {
  title: string;
}

const Profile: FC<ProfileProps> = ({ title }) => {
  return (
    <>
      <TypingEffect component="h1" variant="h1" text="I'm Sergio" />
      <GiantText color={Palette.White}>{title}</GiantText>
      <Flexbox gap="0.5rem">
        {languagesProgramming.map(({ src, alt }) => (
          <Box key={alt}>
            <Image src={src} alt={alt} width={30} height={30} />
          </Box>
        ))}
      </Flexbox>
    </>
  );
};

export default Profile;
