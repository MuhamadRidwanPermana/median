import React from "react";

export default function Category() {
  const text = [
    "Teknologi",
    "Media",
    "Pengembangan",
    "Desain",
    "Budaya",
    "Dunia",
    "Pendidikan",
  ];

  return (
    <>
      <div className="lg:flex w-full relative flex justify-between items-center my-5 pt-3">
        <div className="Category lg:flex flex absolute lg:static overflow-x-scroll lg:overflow-x-visible lg:w-fit w-full h-fit gap-3">
          {text.map((item, index) => {
            return (
              <button
                key={index}
                className="flex justify-center items-center bg-[#3A354114] rounded-full w-fit px-4 h-8 text-xs"
              >
                {item}
              </button>
            );
          })}
        </div>
        <button className="hidden lg:flex text-xs font-semibold text-primary">
          Lihat semua Topik
        </button>
      </div>
    </>
  );
}
