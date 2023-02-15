import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Picture from "../../app/components/home/Picture/Picture";
import Profile from "../../app/components/home/Profile/Profile";
import HomeLayout from "../../components/Layouts/HomeLayout/HomeLayout";
import TypingEffect from "../../components/TypingEffect/TypingEffect";

const Home: NextPage = () => {
  return (
    <HomeLayout leftSide={<Profile />}>
      <Picture />
    </HomeLayout>
  );
};

export default Home;
