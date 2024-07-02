import React from "react";
import { Header } from "./features/Header/index";
import { MainScreen } from "./features/MainScreen";
import { AboutScreen } from "./features/AboutScreen";
import "../src/shared/styles/global.scss";
import { TeamScreen } from "./features/TeamScreen";
import { Footer } from "./features/Footer";

function App() {
  return (
    <>
      <Header />
      <MainScreen />
      <AboutScreen />
      <TeamScreen />
      <Footer />
    </>
  );
}

export default App;
