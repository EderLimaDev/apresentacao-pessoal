import React from "react";
import Avatar from "../../../../assets/images/avatar.jpg";
import Background from "../../../../assets/images/bg.webp";
import { Container, Grid2 } from "@mui/material";

export const Hero = () => {
  return (
    <>
      <Container className="grid lg:grid-cols-2 h-screen sm:grid-cols-1">
        <Grid2   className="absolute left-0 -top-1/4 -z-10 w-3/4 -rotate-45 opacity-45">
          <img src={Background} alt="" />
        </Grid2>
        <Grid2 className="centered-containers">
          <img
            className="w-2/4 rounded-full border-4 border-green-tone-700"
            src={Avatar}
          />
        </Grid2>

        <Grid2 className="centered-containers flex-col gap-6">
          <h1 className="text-6xl main-titles-font font-bold text-green-tone">
            <span className="font-semibold text-5xl text-green-tone-50">Olá, sou </span>
            Eder Lima
          </h1>
          <h3 className="text-3xl main-titles-font font-regular text-green-tone-200">
            A Front-End Web Developer
          </h3>
          <div></div>
        </Grid2>

    
        
      </Container>
    </>
  );
};
