import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3 className='title-page-hero'>
          <Link to='/'>Home</Link>/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  background: var(--clr-primary-1);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;

  color: var(--clr-white);
  a {
    color: var(--clr-white);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    text-decoration: underline;
  }
  .title-page-hero {
    font-size: 1.5rem;
  }
`
export default PageHero
