/** @format */

import React from "react";
import Header from "./Header";
import { DataProvider } from "./contexdata";
import Navbar from "./Navbar";
import Section from "./Section";

function App() {
  return (
    <DataProvider>
      <Navbar />
      <Header />
      <Section />
    </DataProvider>
  );
}

export default App;
