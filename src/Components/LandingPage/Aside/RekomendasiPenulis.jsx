import React from "react";

import Tittle from "../Tittle";

export default function RekomendasiPenulis() {
  const dataRekomendasiPenulis = [
    {
      nama: "Aurellia",
      avatar: "src/assets/images/Avatar11.png",
    },
    {
      nama: "Max",
      avatar: "src/assets/images/Avatar12.png",
    },
    {
      nama: "Theresa Web",
      avatar: "src/assets/images/Avatar13.png",
    },
  ];
  return (
    <>
      <Tittle title="Rekomendasi Penulis" />
      {dataRekomendasiPenulis.map((item, index) => (
        <div key={index} className="flex justify-between items-center my-5">
          <div className="flex gap-3 items-center">
            <img src={item.avatar} alt="" className="w-7 h-7 rounded-full" />
            <h2 className="text-sm font-semibold">{item.nama}</h2>
          </div>
          <button className="text-primary font-semibold text-xs border border-primary px-5 py-1 rounded-full">
            Lihat Profil
          </button>
        </div>
      ))}
    </>
  );
}
