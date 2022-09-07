import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../utils/constants'
import { useBlogContext } from '../context/blog_context'
const Nav = () => {
  const { openSidebar } = useBlogContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <h1 className='logo'>
              Andini <span>Anissa</span>
            </h1>
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, icon, url } = link
            return (
              <li key={id}>
                <Link to={url}>
                  {icon} {text}
                </Link>
              </li>
            )
          })}
        </ul>
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
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  box-shadow: var(--light-shadow);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .social-icons {
    display: none;
  }
  .logo {
    font-size: 2rem;
    color: var(--clr-primary-9);
  }
  span {
    color: var(--clr-primary-3);
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-green-1);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-2);
        }
      }
    }
    .social-icons {
      display: flex;
      margin: 0 0.5rem;
    }
    a {
      color: var(--clr-green-1);
      padding: 0.5rem;
    }
  }
`

export default Nav
