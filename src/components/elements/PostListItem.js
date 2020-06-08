import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { theme } from '../../utils/theme';

const Container = styled.div`
  .is-6 {
    color: ${props => (props.image ? theme.darkAccent : theme.textColorLite)};
    text-align: left;
    font-weight: bold;
    font-size: 0.9rem;
    font-weight: 300;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
  padding-bottom: ${props => (props.border ? '0.5rem' : '')};
  padding-top: ${props => (props.border ? '0.5rem' : '')};
  border: 0px solid ${theme.borderColor};
  border-bottom-width: ${props => (props.border ? '1px' : '')};
  width: 100%;
`;

const TopPostListItem = ({ image, border }) => {
  return (
    <Container border={border} image={image}>
      <div className="columns is-mobile">
        {image && (
          <div className="column is-3">
            <img
              alt="modern"
              src="https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1453282716202-de94e528067c-1-768x546.jpg"
            />
          </div>
        )}

        <div className="column">
          <h1 className="subtitle is-6">Template: Excerpt (Defined)</h1>
        </div>
      </div>
    </Container>
  );
};
TopPostListItem.defaultProps = {
  image: false,
  border: false,
};
TopPostListItem.propTypes = {
  image: PropTypes.bool,
  border: PropTypes.bool,
};
export default TopPostListItem;
