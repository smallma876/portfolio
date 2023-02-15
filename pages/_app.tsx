import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainToolbar from "../components/MainToolbar/MainToolbar";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout top={<MainToolbar />}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
