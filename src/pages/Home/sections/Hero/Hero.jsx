import React from "react";
import Avatar from "../../../../assets/images/avatar.jpg";
import Background from "../../../../assets/images/bg.webp";

export const Hero = () => {
  return (
    <>
      <main className="grid grid-cols-12 h-screen mt-14">
        <img className="absolute -z-10 w-2/4 -rotate-45 opacity-45" src={Background} alt="" />
        <section className="centered-containers flex-col col-span-7">
          <h1 className="text-6xl main-titles-font font-bold text-green-tone">
            <span className="font-semibold text-green-tone-50">Olá, sou </span>
            Eder Lima
          </h1>
          <h3 className="text-4xl main-titles-font font-regular text-green-tone-200">
            A Front-End Web Developer
          </h3>
          <div></div>
        </section>
        <section className="centered-containers justify-start col-span-5">
          <img
            className="w-2/4 rounded-full border-4 border-green-tone-700"
            src={Avatar}
          />
        </section>
      </main>
    </>
  );
};
