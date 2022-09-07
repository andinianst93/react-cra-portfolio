import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/Andini-Anissa-Nasution-1024x1024.jpeg'
// import img from components

const AboutPage = () => {
  return (
    <main>
      <PageHero title='About'></PageHero>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='Andini Anissa' />
        <article>
          <div className='title'>
            <h1>Tentang Saya</h1>
            <div className='underline'></div>
          </div>
          <p>
            Lahir di Jakarta 17 Mei 1993, Andini Anissa adalah SEO Specialist
            dan SEO Content Writer. Memperoleh gelar sarjana Ilmu Administrasi
            Publik dari Universitas Prof. Dr. Moestopo (B) di tahun 2015 dan
            saat ini sedang menjalani program S2 Ilmu Hubungan Internasional di
            Universitas Indonesia sejak 2019.
          </p>
          <p>
            Sebelum menggeluti dunia SEO, Andini bekerja sebagai media
            relations, reporter, dan SEO Content Writer sejak tahun 2017 di MNC
            Media Corporate Secretary (2017 – 2019) dan JalanTikus (2019).
          </p>
          <p>
            Kemudian, pada Desember 2019 hingga Mei 2022 , Andini bergabung
            dengan Sushi.id (Metronix.id) sebagai SEO Specialist and content
            editor. Sushi.id adalah situs rekomendasi film dan nonton film
            online. Sepanjang tahun 2020, Sushi.id berhasil mendapatkan trafik
            dari organik sebanyak 17 juta session.
          </p>
          <p>
            Andini juga pernah bekerja sebagai SEO Specialist di CekPremi.com
            selama enam bulan (September 2021 hingga Maret 2022) dan SEO
            Specialist (freelance) di PhilipMulyana.com.
          </p>
          <p>
            Andini adalah anak pertama dari tiga bersaudara. Dari sisi keluarga
            ayah berdarah batak dan dari sisi ibu berdarah Jawa.
          </p>
          <p>
            Di luar SEO, Andini mampu membuat website dengan HTML, CSS,
            Javascript (ES6), dan React (CRA dan GatsbyJS). Andini juga memiliki
            dasar pengetahuan tentang Serverless Function dengan Netlify.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-primary-4);
  }
  .title {
    color: var(--clr-primary-5);
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
