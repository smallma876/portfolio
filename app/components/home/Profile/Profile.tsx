import React from "react";
import GiantText from "../../../../components/GiantText/GiantText";
import TypingEffect from "../../../../components/TypingEffect/TypingEffect";
import { Palette } from "../../../../utilities/palette";

const Profile = () => {
  return (
    <>
      <TypingEffect component="h1" variant="h1" text="I'm Sergio" />
      <GiantText color={Palette.DarkYellow}>Front End Developer</GiantText>
    </>
  );
};

export default Profile;
