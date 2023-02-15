import Image from "next/image";
import React from "react";

const Picture = () => {
  return (
    <Image
      src="/images/foto.jpg"
      alt="picture-perfil"
      width={300}
      height={300}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default Picture;
