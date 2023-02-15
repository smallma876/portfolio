import { NextPage } from "next";
import React from "react";
import Picture from "../app/components/home/Picture/Picture";
import Profile from "../app/components/home/Profile/Profile";
import HomeLayout from "../components/Layouts/HomeLayout/HomeLayout";

const Home: NextPage = () => {
  return (
    <HomeLayout leftSide={<Profile />}>
      <Picture />
    </HomeLayout>
  );
};

export default Home;
