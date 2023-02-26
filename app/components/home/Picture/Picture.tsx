import Image from "next/image";
import React, { FC } from "react";
import { myLoader } from "../../../../utils/loaderImages";

interface PictureProps {
  url: string;
}

const Picture: FC<PictureProps> = ({ url }) => {
  return (
    <Image
      loader={myLoader}
      src={url}
      alt="picture-perfil"
      width={300}
      height={300}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default Picture;
