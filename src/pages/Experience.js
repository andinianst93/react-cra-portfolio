import React, { useState } from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { PageHero } from '../components'
import { works } from '../utils/constants'

function Experience() {
  const [jobs, setJobs] = useState(works)
  const [value, setValue] = useState(0)
  const { company, dates, duties, title } = jobs[value]
  return (
    <main>
      <PageHero title='About'></PageHero>
      <Wrapper>
        <div className='title'>
          <h1>Experience</h1>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {works.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>

          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  width: 100%;
  margin: 5rem auto;
  @media screen and (min-width: 992px) {
    .section {
      width: 95vw;
    }
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    margin-bottom: 4rem;
    text-align: center;
  }
  .jobs-center {
    width: 80vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    color: var(--clr-primary-4);
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: var(--spacing);
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--clr-primary-10);
  }
  .job-btn:hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }
  .active-btn {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

  .job-info h3 {
    font-weight: 400;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: var(--clr-primary-2);
    background: var(--clr-primary-3);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
  .job-date {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-4);
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--clr-primary-4);
  }
  .job-icon {
    color: var(--clr-primary-5);
  }
`
export default Experience
