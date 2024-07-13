import React from "react";

export default function Tittle( { title } ) {
  return (
    <div className="w-full h-auto pt-5">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
