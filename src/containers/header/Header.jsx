import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt4__header section__padding" id="home">
      <div className="gpt4__header-content">
        <h1 className="gradient__text">Let's Create Something amazing with GPT-4o OpenAI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vitae incidunt
          quisquam at quas corporis similique quibusdam, dicta consectetur molestias quaerat aut.
        </p>

        <div className="gpt4__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt4__header-content__people">
          <img src={people} alt="profile pictures of people using our app" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4__header-image">
        <img src={ai} alt="graphic design picture of artificial intelligence" />
      </div>
    </div>
  );
};

export default Header;
