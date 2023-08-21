import React from "react";
import { Nav } from "../components/nav";
import SearchBar from "../components/body";
import ImageGrid from "../components/imageGrid";

const HomePage = () => {
  return (
    <main className="w-full h-screen bg-slate-100">
      <Nav />
      <SearchBar />
      <ImageGrid />
    </main>
  );
};

export default HomePage;
