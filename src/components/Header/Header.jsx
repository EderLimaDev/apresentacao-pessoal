import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="fixed w-full z-20 text-green-tone-50 border-b-green-tone-800 border-b-2 h-14 top-0 centered-containers justify-evenly text-2xl bg-green-tone-950 opacity-2">
      <Link to="/"><div className="cursor-pointer hover:underline">Home</div></Link>
      <Link to="/projects"><div className="cursor-pointer hover:underline">Projetos</div></Link>
      <Link to="/about"><div className="cursor-pointer hover:underline">Sobre</div></Link>
    </nav>
  );
};
