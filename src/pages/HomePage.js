import React from 'react'
import { Hero, About, Services, LatestWorks, Contact } from '../components'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <LatestWorks />
      <Contact />
    </main>
  )
}

export default HomePage
