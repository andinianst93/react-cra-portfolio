import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <Wrapper>
      <section className='connect'>
        <div className='banner'>
          <div className='section-title'>
            <h2>let's get in touch</h2>
            <div className='underline'></div>
          </div>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non qui
            quam exercitationem consequuntur facere hic magni voluptatum animi
            maiores corporis. Consectetur eaque sed perferendis numquam
            accusamus facere magni cumque odit?
          </p>

          <Link to='/contact' className='btn'>
            Contact Me
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  p {
    color: var(--clr-grey-1);
  }
  .connect {
    min-height: 40vh;
    position: relative;
    margin: 5rem 0;
  }
  .banner {
    background: var(--clr-primary-7);
    padding: 3rem 5rem 12rem 5rem;
    text-align: center;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
  }
  .connect {
    display: grid;
    place-items: center;
  }
  .banner .section-title {
    margin-bottom: 2rem;
  }
  .text {
    max-width: 30rem;
  }
`

export default Contact
