import React from "react";

import Main from "@/Components/LandingPage/MainContent/Main";
import Aside from "@/Components/LandingPage/Aside/Aside";
import Category from "@/Components/LandingPage/Category";

export default function Body() {
  return (
    <div>
      <body className="w-full h-full lg:flex lg:flex-row flex flex-col-reverse lg:gap-16">
        
        <Main />
        <Aside />

        <div className="w-full lg:hidden">
          <div className="lg:hidden flex items-center h-12 px-3 border-2 border-border-color rounded-lg mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M10.9167 9.6667H10.2584L10.025 9.4417C11.025 8.27503 11.5417 6.68337 11.2584 4.9917C10.8667 2.67503 8.93337 0.825033 6.60003 0.5417C3.07503 0.108366 0.108366 3.07503 0.5417 6.60003C0.825033 8.93337 2.67503 10.8667 4.9917 11.2584C6.68337 11.5417 8.27503 11.025 9.4417 10.025L9.6667 10.2584V10.9167L13.2084 14.4584C13.55 14.8 14.1084 14.8 14.45 14.4584C14.7917 14.1167 14.7917 13.5584 14.45 13.2167L10.9167 9.6667ZM5.9167 9.6667C3.8417 9.6667 2.1667 7.9917 2.1667 5.9167C2.1667 3.8417 3.8417 2.1667 5.9167 2.1667C7.9917 2.1667 9.6667 3.8417 9.6667 5.9167C9.6667 7.9917 7.9917 9.6667 5.9167 9.6667Z"
                fill="#6C717A"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari Bacaan"
              className="w-full h-full outline-none rounded-full px-2"
            />
          </div>
          <Category />
        </div>
      </body>
    </div>
  );
}
