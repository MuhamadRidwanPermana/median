import React from "react";

import Tittle from "@/Components/LandingPage/Tittle";
import CardMainContent from "@/Components/LandingPage/MainContent/CardMainContent";
import Category from "@/Components/LandingPage/Category";
import RekomendasiPenulis from "@/Components/LandingPage/Aside/RekomendasiPenulis";

export default function Main() {
  return (
    <main className="w-full h-full">
      <header>
        <Tittle title="Semua Bacaan" />
        <Category />
      </header>
      <body className="flex">
        <CardMainContent />
        
      </body>
      <span className="lg:hidden block">
        <RekomendasiPenulis />
      </span>
    </main>
  );
}
