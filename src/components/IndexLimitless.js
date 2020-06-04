import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.section`
  .button {
    background-color: ${theme.buttonColor} !important;
    padding: 1.5rem 2rem;
    font-weight: bold;
    border-radius: 0px;
  }
`;

const IndexLimitless = () => {
  return (
    <Section className="section">
      <div className="container">
        <h1 className="subtitle is-2">Limitless Options</h1>
        <h1 className="subtitle is-6">
          Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum
          sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus,
          accumsan non efficitur id, pretium quis ante
        </h1>
        <button type="button" className="button is-primary">
          DOWNLOAD NOW
        </button>
      </div>
    </Section>
  );
};
export default IndexLimitless;
