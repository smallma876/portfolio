import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Flexbox } from "../../shared/components/Flexbox/Flexbox";

const socialNetworks = [
  {
    src: "./images/social/linkedin.svg",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/sergio-ruben-mallma-chavez-5b2b0913b",
  },
  {
    src: "./images/social/instagram.svg",
    alt: "instagram",
    link: "https://www.instagram.com/sergio.mdc/",
  },
  {
    src: "./images/social/facebook.svg",
    alt: "facebook",
    link: "https://web.facebook.com/sergio.mallma.92",
  },
];

const SocialNetwork = () => {
  return (
    <div>
      <Flexbox gap="0.5rem">
        {socialNetworks.map((social) => (
          <Box key={social.alt}>
            <Link href={social.link} target="_blank">
              <Image
                src={social.src}
                alt={social.alt}
                width={20}
                height={20}
                style={{ cursor: " pointer" }}
              />
            </Link>
          </Box>
        ))}
      </Flexbox>
    </div>
  );
};

export default SocialNetwork;
