import React from 'react'
import { styled } from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Our house furniture company was founded with the goal of providing
            high-quality and stylish furniture to customers across the country.
            We specialize in items for every room of the house, including living
            room, dining room, bedroom, home office, and outdoor spaces. Our
            team of expert designers is always on top of the latest trends and
            styles, ensuring that we offer a variety of options to suit every
            taste and preference. Whether you're looking for a classic,
            traditional look or something more modern and contemporary, we've
            got you covered. We take pride in our commitment to quality, using
            only the best materials and craftsmanship in our furniture. Our
            pieces are built to last, with durability and longevity in mind. At
            our company, we believe that furniture should be more than just
            functional - it should add beauty and personality to your home.
            That's why we offer a range of customization options, allowing you
            to choose fabrics, finishes, and other details to make each piece
            uniquely your own. Our customer service team is dedicated to
            ensuring that every shopping experience is a positive one. From
            answering questions to helping you make the right choice for your
            space, we're here to help you create the home of your dreams.
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
    color: var(--clr-grey-5);
  }
  .title {
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
