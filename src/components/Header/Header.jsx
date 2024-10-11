import React from "react";

export const Header = () => {
  return (
    <nav className="fixed w-full h-14 top-0 centered-containers justify-evenly text-2xl bg-black-tone-900">
      <div className="cursor-pointer">Projetos</div>
      <div className="cursor-pointer">Contato</div>
      <div className="cursor-pointer">Sobre</div>
    </nav>
  );
};
