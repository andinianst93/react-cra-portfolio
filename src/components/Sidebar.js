import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links, social } from '../utils/constants'
import { useBlogContext } from '../context/blog_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useBlogContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <h1 className='logo'>
            Andini <span>Anissa</span>
          </h1>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, text, icon, url } = link
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
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
                <Link to={url}>{icon}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </SidebarContainer>
  )
}
const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 40px;
    font-size: 2rem;
    color: var(--clr-primary-9);
  }
  span {
    color: var(--clr-primary-3);
  }
  .links {
    margin-bottom: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-primary-5);
      transition: var(--transition);
      letter-spacing: var(--spacing);
    }
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    text-decoration: underline;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    height: 100%;
    background: var(--clr-primary-1);
    transition: var(--transition);
    transform: translate(-100%);
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
  }
  .show-sidebar {
    transform: translate(0);
  }
  .social-icons {
    justify-self: center;
    display: flex;
    padding-bottom: 2rem;
  }
  .social-icons a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .social-icons a:hover {
    color: var(--clr-primary-1);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
