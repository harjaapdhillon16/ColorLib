import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.section`
  padding: 4rem 4rem;
  button {
    background-color: ${theme.buttonColor};
    padding: 1.5rem 4rem;
    color: ${theme.backgroundColor};
    border-radius: 0px;
  }
`;

const WordpressThemeDownload = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline is-centered is-vcentered">
          <div className="column is-6">
            <h1 className="subtitle is-4 has-text-left">
              Do you like this awesome WordPress theme?
            </h1>
          </div>
          <div className="column is-2" />
          <div className="column is-4">
            <button type="button" className="button">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default WordpressThemeDownload;
