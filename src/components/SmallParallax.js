import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Container = styled.div`
  /* The image used */
  background-image: url('https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/12/photo-1452723312111-3a7d0db0e024.jpg');

  /* Set a specific height */
  height: 70vh;
  .margin {
    min-height: 15vh;
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

const SmallParallax = () => {
  return (
    <Container>
      <div className="margin" />
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="columns is-centered is-multiline">
            <div className="column is-12">
              <h1 className="subtitle is-1 ">Small Parallax Section</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
                Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget
                tincidunt leo ornare quis.
              </p>
            </div>

            <div className="column is-3">
              <button type="button" className="button is-primary ">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default SmallParallax;
