import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageDownText from './elements/ImageDownText';

import { theme } from '../utils/theme';

const Container = styled.div`
  button {
    background-color: ${theme.buttonColor};
    border-radius: 0px;
    padding: 1.5rem 2.5rem;
    color: ${theme.backgroundColor};
  }
`;

const uri =
  'https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1453282716202-de94e528067c-1-768x546.jpg';
const BlogCard = ({ button }) => {
  return (
    <Container>
      <ImageDownText uri={uri} text="card" />
      <h1 className="title is-3">Template: More Tag</h1>
      <h1 className="subtitle is-6 has-text-grey">March 15,2016</h1>
      <h1 className="subtitle is-6 has-text-grey">
        {' '}
        Right after this sentence should be a “continue reading” button of some
        sort.
      </h1>
      {button && <button className="button ">Read More</button>}
    </Container>
  );
};
BlogCard.defaultProps = {
  button: false,
};
BlogCard.propTypes = {
  button: PropTypes.bool,
};
export default BlogCard;
