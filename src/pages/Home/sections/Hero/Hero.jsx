import React from "react";
import Avatar from "../../../../assets/images/avatar.jpg";
import Background from "../../../../assets/images/bg.webp";
import { Container, Grid2 } from "@mui/material";
import { SocialMedia } from "../../../../components/SocialMedia/SocialMedia";

export const Hero = () => {
  return (
    <>
     
      <Container className="relative grid xl:grid-cols-3 h-screen sm:grid-cols-1">
        <SocialMedia />
        <Grid2 className="absolute left-0 -z-10 w-3/4 -rotate-45 opacity-45">
          <img src={Background} alt="" />
        </Grid2>
        <Grid2 className="centered-containers col-span-1">
          <img
            className="w-2/4 rounded-full border-4 border-green-tone-700"
            src={Avatar}
          />
        </Grid2>

        <Grid2 className="centered-containers flex-col gap-6 col-span-2">
          <h1 className="text-6xl text-center main-titles-font font-bold text-green-tone">
            <span className="font-semibold text-5xl text-green-tone-50">Olá, sou </span>
            Eder Lima
          </h1>
          <h3 className="text-3xl text-center main-titles-font text-green-tone-200">
            A Front-End Web Developer
          </h3>
        
        </Grid2>

    
        
      </Container>
    </>
  );
};
