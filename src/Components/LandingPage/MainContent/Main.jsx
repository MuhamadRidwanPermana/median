import React from "react";

import Tittle from "../Tittle";
import Category from "../Category";
import CardMainContent from "./CardMainContent";
import RekomendasiPenulis from "../Aside/RekomendasiPenulis";

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
