import { NextPage } from "next";
import React from "react";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import { EntryPortfolio } from "../app/domain/EntryPortfolio";
import HomeLayout from "../app/pages/home/HomeLayout/HomeLayout";
import Profile from "../app/pages/home/Profile/Profile";
import Picture from "../app/pages/home/Picture/Picture";
import { MainToolbarLayout } from "../components/MainToolbar/MainToolbarLayout";

const client = createClient({
  space: process.env.SPACE_KEY || "",
  accessToken: process.env.ACCESS_TOKEN_KEY || "",
});

interface HomeProps {
  profile: any;
}

const Home: NextPage<HomeProps> = ({ profile }) => {
  const { title, url } = profile;
  return (
    <MainToolbarLayout>
      <HomeLayout leftSide={<Profile title={title} />}>
        <Picture url={url} />
      </HomeLayout>
    </MainToolbarLayout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await client.getEntries({
    content_type: "portfolio",
  }); // your fetch function here
  const { fields } = data.items[0] as EntryPortfolio;

  return {
    props: {
      profile: {
        title: fields.title,
        url: fields.imageProfile.fields.file.url,
      },
    },
    //revalidate: 30, pasarán 30 segundos y en lasiguiente petición regenerará la página y en la siguiente mostrará la actualizada.
  };
};

export default Home;
