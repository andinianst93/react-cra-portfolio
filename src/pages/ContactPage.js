import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

const ContactPage = () => {
  return (
    <main>
      <PageHero title='Contact'></PageHero>
      <Wrapper className='page section section-center'>
        <article>
          <div className='title'>
            <h1>Hubungi Saya</h1>
            <div className='underline'></div>
          </div>
          <p>
            Ingin bekerja sama, ngobrol, atau diskusi banyak hal terkait SEO dan
            website? Bisa langsung email saya ke
            <a href='mailto:email@email.com'> @andinianst93@gmail.com</a>
          </p>
          <p>
            Kamu juga bisa menghubungi saya lewat Instagram
            <a href='https://www.instagram.com/andin1anst/?hl=en'>
              @andin1anst
            </a>
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-primary-4);
  }
  .title {
    color: var(--clr-primary-5);
    text-align: center;
  }
  a {
    color: var(--clr-primary-8);
  }
  .underline {
    margin: auto;
  }
`
export default ContactPage
