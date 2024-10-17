import { Container, List, ListItem } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import javascript from './../../../../assets/icons/javascript.svg'
import html from './../../../../assets/icons/html5.svg'
import css from './../../../../assets/icons/css3.svg'
import react from './../../../../assets/icons/react.svg'
import node from './../../../../assets/icons/nodejs.svg'
import tailwindcss from './../../../../assets/icons/tailwindcss.svg'


export const Skills = () => {
  return (
       
    <Container className="w-full h-full pt-24 mb-24 relative">      
        <h1
        className="relative text-4xl main-titles-font text-center font-bold text-green-tone-50 
            before:content-[''] before:bg-green-tone before:h-1 before:w-24 before:absolute before:bottom-0"
        >
        Minhas Habilidades
        </h1>
        <Container className="grid md:grid-cols-2 sm:grid-cols-1 mt-10 mb-24 gap-4" >
            <Box className='flex flex-col gap-2 bg-green-tone-950 border-2 border-green-100 rounded-xl p-8 md:max-w-md'>
                <h1 className='uppercase tracking-wide text-3xl main-titles-font text-green-tone-200 font-bold'>Soft Skills</h1>
                <List className='text-2xl uppercase'>
                    <ListItem>Comunicativo</ListItem>
                    <ListItem>Trabalho em Equipe</ListItem>
                    <ListItem>Resolução de Problemas</ListItem>
                    <ListItem>Fácil Aprendizado</ListItem> 
                </List>
            </Box>
            <Box className='flex flex-col  gap-2 bg-green-tone-950 border-2 border-green-100 rounded-xl p-8 md:max-w-md'>
                <h1 className='uppercase tracking-wide text-3xl main-titles-font text-green-tone-200 font-bold'>Hard Skills</h1>
                <List className='flex flex-wrap gap-3 min-w-md text-2xl has-[img]:w-20 has-[ListItem]:pr-5'> 
                    <ListItem><img src={html} alt="logo html5" />&nbsp;HTML5</ListItem>
                    <ListItem><img src={css} alt="logo css3"  />&nbsp;CSS3</ListItem>
                    <ListItem><img src={javascript} alt="logo javascript" />&nbsp;JAVASCRIPT</ListItem>
                    <ListItem><img src={react} alt="logo reactjs" />&nbsp;REACTJS</ListItem>
                    <ListItem><img src={tailwindcss} alt="logo tailwindcss"/>&nbsp;TAILWINDCSS</ListItem> 
                    <ListItem><img src={node} alt="logo nodejs" />&nbsp;NODEJS</ListItem>  
                </List>
            </Box>

        </Container>
    </Container>



  )
}
