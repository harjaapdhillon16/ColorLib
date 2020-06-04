import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  /* The image used */
  background-image: url('https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1443527216320-7e744084f5a7-1.jpg');

  /* Set a specific height */
  height: 100vh;
  .margin {
    min-height: 28vh;
  }
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .subtitle {
    color: ${theme.backgroundColor} !important;
    font-size: 3rem;
  }
  p {
    color: ${theme.backgroundColor} !important;
    margin-top: -1rem;
  }
  button {
    width: 90%;
    min-height: 3rem;
    border-radius: 0px;
    font-weight: bold;
    font-size: 0.8rem;
    border-width: 2px;
  }
  .is-primary {
    background-color: ${theme.buttonColor} !important;
  }
  .is-transparent {
    background-color: transparent !important;
    color: ${theme.backgroundColor};
    text-transform: capitalize;
  }
`;

const HomeHero = () => {
  return (
    <Container>
      <div className="margin" />
      <div className="columns is-centered">
        <div className="column is-6">
          <div className="columns is-centered is-multiline">
            <div className="column is-12">
              <h1 className="subtitle is-1 ">We Change Everything WordPress</h1>
              <p>This is the only WordPress theme you will ever want to use.</p>
            </div>
            <div className="column is-4">
              <button type="button" className="button is-primary ">
                READ MORE
              </button>
            </div>
            <div className="column is-4">
              <button type="button" className="button is-transparent ">
                DOWNLOAD NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HomeHero;
