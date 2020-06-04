import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '../utils/theme';

const Section = styled.section`
  h1 {
    text-align: left;
  }
  .subtitle {
    padding-top: 1rem;
  }

  .is-primary {
    background-color: ${theme.buttonColor};
    align-self: flex-start;
    border-radius: 0px;
    padding: 1.3rem;
    font-weight: bold;
  }
  .columns {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : '')};
  }
`;

const HomeSeoLaptop = ({ reverse }) => {
  return (
    <Section reverse={reverse} className="section">
      <div className="container">
        <div className="columns is-multiline is-centered is-vcentered">
          <div className="column is-7">
            <img
              src="https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/macbook-preview-flexible.png"
              alt="laptop"
            />
          </div>
          <div className="column is-1" />
          <div className="column is-4 has-text-left">
            <h1 className="title is-3">SEO Friendly</h1>
            <h1 className="subtitle is-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
              diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus
              ac ligula id ultricies.
            </h1>
            <button type="button" className="button is-primary">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
HomeSeoLaptop.defaultProps = {
  reverse: false,
};
HomeSeoLaptop.propTypes = {
  reverse: PropTypes.bool,
};
export default HomeSeoLaptop;
