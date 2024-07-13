import React from "react";

import { Avatar8, Avatar9, Avatar10 } from "@/utils/avatar";

export default function CardAside() {
  const dataBacaanPopuler = [
    {
      date: "09 Jun 2023",
      title:
        "Mendekati AI yang Mampu Belajar Sendiri: Pengembangan Algoritma Pembelajaran Mesin yang Efektif",
      avatar: Avatar8,
      author: "Rochel Foose",
      bg: "secondary",
    },
    {
      date: "16 Des 2022",
      title:
        "Perkembangan Terbaru dalam Teknologi 5G: Masa Depan Koneksi Internet yang Lebih Cepat dan Andal",
      avatar: Avatar9,
      author: "Ede Warren",
      bg: "primary",
    },
    {
      date: "05 Jun 2023",
      title:
        "Dampak Stres pada Kesehatan Mental dan Strategi Mengelolanya dalam Kehidupan Sehari-hari",
      avatar: Avatar10,
      author: "Eduardo",
      bg: "secondary",
    },
  ];

  return (
    <>
      {dataBacaanPopuler.map((item, index) => (
        <div
          key={index}
          className={`h-auto p-5 bg-${item.bg} bg-opacity-20 rounded-2xl mb-5 cursor-pointer`}
        >
          <header className="text-sm flex items-center gap-2">
            <h1 className="font-semibold bg-light px-2 py-1 rounded-md ">
              #{1 + index}
            </h1>
            <h1>{item.date}</h1>
          </header>
          <body>
            <p className="font-bold my-3">
              {item.title.length > 40
                ? item.title.substring(0, 60) + "..."
                : item.title}
            </p>
            <div className="flex gap-3 items-center">
              <img
                src={item.avatar}
                alt=""
                className="w-5 h-5 rounded-full"
              />
              <h2 className="text-sm">{item.author}</h2>
            </div>
          </body>
        </div>
      ))}
    </>
  );
}
