import React from 'react'
import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Projects } from './sections/Projects/Projects'
import { Skills } from './sections/Skills/Skills'

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
   
    </>
  )
}
