import { Container } from '@mui/material'
import React from 'react'
import { CardProject } from '../../../../components/CardProject/Card'

export const Projects = () => {
  return (
    <>
        <Container>
          <h1
            className="relative text-4xl main-titles-font text-center font-bold text-green-tone-50
            before:content-[''] before:bg-green-tone before:h-1 before:w-24 before:absolute before:bottom-0"
          >
            Meus Projetos
          </h1>

          <CardProject />
        </Container>
      
    </>

  )
}
