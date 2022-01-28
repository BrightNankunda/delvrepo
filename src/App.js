import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import Categories from "./components/Categories";
import Articles from "./components/Articles";
import MiddleBanner from "./components/MiddleBanner";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <TopBanner />
      <Categories />
      <MiddleBanner />
      <Articles />
      <Footer />
    </div>
  );
}
