import React from "react";

import LoginForm from "../Components/LoginForm";
import Footer from "./Footer";

export default function LoginCard() {
  return (
    <section className="h-screen w-full">
      <div className="relative flex flex-col justify-center items-center h-full w-full">
        <LoginForm />
        <Footer />
      </div>
    </section>
  );
}
