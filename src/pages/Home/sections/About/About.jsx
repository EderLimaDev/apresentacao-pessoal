import { Box, Container } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Container
      className="relative w-full h-[500px] custom-background
      before:content-[' '] before:absolute before:bg-black-tone before:left-0 before:opacity-80 before:w-full before:h-full"
    >
      <Box
        className="absolute flex items-center flex-col gap-8 left-0"
      >
        <h1
          className="relative text-4xl main-titles-font text-center font-bold text-green-tone-50
          before:content-[''] before:bg-green-tone before:h-1 before:w-24 before:absolute before:bottom-0"
        >
          Sobre Mim
        </h1>
        <p className="w-3/4 text-justify md:text-2xl sm:text-sm antialiased">
          Apaixonado por tecnologia, Iniciei com ferramentas no-code como
          Kodular e Thunkable criando aplicativos para projetos pessoais, criei
          sites em plataformas como Wix mas foi no desenvolvimento web Front-End
          que me encontrei e me apaixonei por programação. Desde então venho na
          busca de constante de conhecimento na área para melhorar minhas
          habilidades. Trabalho a 12 anos na área de Recursos Humanos o que me
          confere uma capacidade comprovada de trabalho em equipe e excelente
          habilidade de resolução de problemas. Realizo integrações para novos
          funcionários e busco sempre ajudar o próximo. Atuo na área de
          desenvolvimento web com projetos freelances e no momento busco uma
          oportunidade de demonstrar meu conhecimento, proficiente em Javascript
          e React.
        </p>
      </Box>
    </Container>
  );
};
