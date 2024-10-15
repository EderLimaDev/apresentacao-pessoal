import React from "react";

export const Header = () => {
  return (
    <nav className="fixed w-full z-20 text-green-tone-50 border-b-green-tone-800 border-b-2 h-14 top-0 centered-containers justify-evenly text-2xl bg-green-tone-950 opacity-2">
      <div className="cursor-pointer hover:underline">Projetos</div>
      <div className="cursor-pointer hover:underline">Contato</div>
      <div className="cursor-pointer hover:underline">Sobre</div>
    </nav>
  );
};
