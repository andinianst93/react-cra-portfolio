import React from 'react'
import styled from 'styled-components'
import { social } from '../utils/constants'
const Footer = () => {
  return (
    <Wrapper>
      <ul className='social-icons'>
        {social.map((social) => {
          const { id, url, icon } = social
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
      <h5>
        &copy; {new Date().getFullYear()} <span>Andini Anissa.</span> All Rights
        Reserved.
      </h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-grey-9);
  text-align: center;
  span {
    color: var(--clr-grey-4);
  }
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .social-icons a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-2);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .social-icons a:hover {
    color: var(--clr-primary-5);
  }
  h5 {
    font-size: 1rem;
    color: var(--clr-grey-4);
    margin: 0.1rem;
    font-weight: 300;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: column;
  }
`
export default Footer
