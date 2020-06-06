import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Container = styled.div`
  margin-bottom: 1rem;
  .absolutePosition {
    position: absolute;
    background-color: ${theme.backgroundColor};
    width: 14rem;
    height: 3rem;
    text-align: center;
    margin-top: -3rem;
    h1 {
      margin-top: 15px;
      color: ${theme.textColorLite} !important;
    }
  }
`;

const ImageDownText = ({ uri, text }) => {
  return (
    <Container>
      <img src={uri} alt="modern image" />
      <div className="absolutePosition">
        <h1 className="subtitle is-6">{text}</h1>
      </div>
    </Container>
  );
};
export default ImageDownText;
