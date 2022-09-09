import React from 'react'
import styled from 'styled-components'
import aboutImage from '../assets/andini-a-about.jpg'

const About = () => {
  return (
    <Wrapper className='section about'>
      <div className='section-center about-center'>
        <article className='about-img'>
          <img
            src={aboutImage}
            className='hero-photo'
            alt='profil andini anissa'
          />
        </article>
        <article className='about-info'>
          <div className='section-title about-title'>
            <h2>about</h2>
            <div className='underline'></div>
            <p>
              Andini Anissa adalah SEO Specialist dan SEO Content Writer.
              Sebagai SEO Andini percaya bahwa data yang baik akan menghasilkan
              keputusan yang baik, dan bahwa cara terbaik untuk membuat situs
              yang sukses adalah dengan memenuhi kebutuhan user melalui
              <i>cross-device experience</i>.
            </p>
            <p>
              Pengalaman saya sebagai SEO membuat saya mampu untuk
              mengidentifikasi peluang untuk meningkatkan trafik, kualitas
              konten, dan konversi. Berbagai cara yang sudah Andini lakukan
              yakni melakukan riset keyword (SEMRush, Ahrefs, dan Google
              Trends), mengoptimasi on-page SEO, memperbaiki dan
              mengidentifikasi permasalahan technical SEO (Screaming Frogs dan
              Integrity), dan link building.
            </p>
            <p>
              Selain SEO, Andini mampu membuat website dengan HTML, CSS,
              Javascript (ES6), React (CRA dan GatsbyJS), dan GraphQL. Andini
              juga memiliki dasar pengetahuan tentang Serverless Function -
              Netlify.
            </p>
          </div>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-1);
  width: 100vw;
  margin: 0 auto;
  .about-title {
    text-align: center;
  }
  .about-title {
    margin-bottom: 2rem;
  }
  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }
  .about-img {
    display: none;
  }
  p {
    color: var(--clr-primary-4);
  }
  @media screen and (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }
    .about-img {
      display: block;
      position: relative;
    }
    .about-img::before {
      left: -2rem;
    }
    .about-info {
      align-self: center;
    }
    .hero-photo {
      max-width: 35rem;
      max-height: 55rem;
      object-fit: cover;
      border-radius: var(--radius);
      position: relative;
    }
    .about-img::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 2rem;
      right: -2rem;
      border: 5px solid var(--clr-primary-5);
      border-radius: var(--radius);
    }
  }
`
export default About
