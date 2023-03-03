import Image from "next/image";
import React from "react";
import { MainToolbarLayout } from "../../components/MainToolbar/MainToolbarLayout";
import { Box, Flexbox } from "../../shared/components/Flexbox/Flexbox";
import { Palette } from "../../utils/palette";
import GiantText from "./../../components/GiantText/GiantText";

const index = () => {
  return (
    <MainToolbarLayout>
      <section>
        <Flexbox justifyContent="center" alignItems="center" gap="1.5rem">
          <Box>
            <GiantText color={Palette.DarkYellow}>CUSTOM JIRA :</GiantText>
          </Box>
          <Box>
            <a
              href="https://custom-jira-smallma876.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <GiantText color={Palette.White}>
                JIRA PERSONALIZADO{" "}
                <Image
                  src="./images/internal/externallink.svg"
                  alt="external link"
                  width={36}
                  height={36}
                  style={{ cursor: " pointer" }}
                />
              </GiantText>
            </a>
          </Box>
        </Flexbox>
      </section>
    </MainToolbarLayout>
  );
};

export default index;
