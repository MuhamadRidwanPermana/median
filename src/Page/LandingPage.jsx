import React from "react";
import Header from "../Components/LandingPage/Header";
import Body from "../Components/LandingPage/Body";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="h-full w-full lg:px-10 px-4">
        <Body />
      </div>
      <footer className="w-full h-11 text-xs text-[#6C717A] border border-border-color text-center flex justify-center items-center bg-light">
        © 2023 PT. Median. All Rights Reserved
      </footer>
    </div>
  );
}
