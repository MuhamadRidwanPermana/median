import React from "react";
import CardAside from "@/Components/LandingPage/Aside/CardAside";
import Tittle from "@/Components/LandingPage/Tittle";
import RekomendasiPenulis from "@/Components/LandingPage/Aside/RekomendasiPenulis";

export default function Aside() {
  return (
    <aside className="lg:w-1/3 w-full h-full">
      <header>
        <Tittle title="Bacaan Populer" />
      </header>
      <body>
        <div className="w-full h-auto lg:py-5 lg:m-0 mt-3">
          <CardAside />

          <p className="hidden lg:block" >
            <RekomendasiPenulis />
          </p>
          
        </div>
      </body>
    </aside>
  );
}
