import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import andiniImg from '../assets/Andini-Anissa-Nasution-1024x1024.jpeg'
const Hero = () => {
  return (
    <Wrapper className='section-center hero-center'>
      <article>
        <div className='underline'></div>
        <h1>Halo, Saya Andini</h1>
        <h2>SEO Specialist</h2>
        <Link to='/contact' className='btn'>
          Hire Me
        </Link>
      </article>
      <article className='hero-img'>
        <img src={andiniImg} alt='andini anissa' className='img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: calc(100vh - 5rem);
  display: grid;
  align-items: center;
  place-items: center;
  .hero-img {
    display: none;
  }
  .btn {
    margin-top: 1.25rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media screen and (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    .hero-center {
      grid-template-colums: 1fr 1fr;
    }
    .hero-img {
      display: block;
      position: relative;
    }
    .img {
      max-width: 25rem;
      max-height: 30rem;
      object-fit: cover;
      border-radius: 50%;
      position: relative;
    }
    .hero-img::before {
      content: '';
      width: 100%;
      height: 100%;
      background: var(--clr-primary-5);
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      border-radius: 50%;
    }
  }
`

export default Hero
