import { useState, useEffect } from "react";

import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar6, Avatar7 } from "@/utils/avatar";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "@/utils/images";

export default function CardMainContent() {
  const data = [
    {
      title:
        "Internet of Things (IoT) dan Masa Depan Keterhubungan dalam Kehidupan Sehari-hari",
      author: "Kristin Watson",
      // avatar: "src/assets/images/Avatar2.png",
      avatar: Avatar2,
      date: "09 Jun 2023",
      topik: "Media",
      // img: "src/assets/images/Image1.png",
      img: Image1,
    },
    {
      title:
        "Mengembangkan Keterampilan Berpikir Kritis melalui Pendidikan: Strategi dan Implementasi di Kelas",
      author: "Cameron Williamson",
      avatar: Avatar3,
      date: "02 Jun 2023",
      topik: "Media",
      img: Image2,
    },
    {
      title:
        "Inovasi Teknologi Big Data: Menggali Wawasan dan Mendukung Pengambilan Keputusan yang Efektif",
      author: "Arlene McCoy",
      avatar: Avatar4,
      date: "15 Agu 2023",
      topik: "Media",
      img: Image3,
    },
    {
      title:
        "Desain Interior Ramah Lingkungan: Pendekatan Green Design dalam Menciptakan Ruang yang Berkelanjutan",
      author: "Chance Vaccaro",
      avatar: Avatar1,
      date: "27 Mar 2023",
      topik: "Media",
      img: Image4,
    },
    {
      title:
        "Pendidikan Karakter: Membangun Nilai-Nilai Etika dan Moral pada Anak-anak",
      author: "Darrell Steward",
      avatar: Avatar6,
      date: "23 Jan 2023",
      topik: "Media",
      img: Image5,
    },
    {
      title:
        "Peran Penting Kepercayaan Diri dalam Pengembangan Pribadi dan Profesional",
      author: "Savannah Nguyen",
      avatar: Avatar7,
      date: "13 Apr 2023",
      topik: "Media",
      img: Image6,
    },
  ];

  return (
    <div className="w-full h-full items-center mt-3">
      {data.map((item, index) => (
        <div className="lg:w-full max-w-full h-full">
          <div
            key={index}
            className="relative w-full h-full flex items-center lg:gap-5 mb-7 rounded-2xl cursor-pointer"
          >
            <div
              className="lg:bg-auto bg-cover bg-center lg:w-72 lg:h-36 w-32 h-32 rounded-lg"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <div className="grid px-5 w-full h-full">
              <span className="text-xs">{item.date}</span>
              <h1 className="lg:text-xl font-bold">{item.title}</h1>
              <div className="flex gap-3 items-center mb-2">
                <img
                  src={item.avatar}
                  alt=""
                  className="w-5 h-5 rounded-full"
                />
                <h2 className="lg:text-sm text-xs">{item.author}</h2>
              </div>
              <button className="flex items-center border rounded-full w-fit px-3 h-6 text-xs cursor-pointer">
                {item.topik}
              </button>
            </div>
            <div className="absolute bottom-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1665 2.5H5.83317C4.9165 2.5 4.17484 3.25 4.17484 4.16667L4.1665 17.5L9.99984 15L15.8332 17.5V4.16667C15.8332 3.25 15.0832 2.5 14.1665 2.5ZM14.1665 15L9.99984 13.1833L5.83317 15V4.16667H14.1665V15Z"
                  fill="#4A505C"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
