import React from 'react';
import styled from 'styled-components';

import { theme } from '../../utils/theme';

const Container = styled.div`
  .container {
    position: relative;
    width: 100%;
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: ${theme.textColor};
  }

  .container:hover .overlay {
    opacity: 0.7;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const ImageHover = ({ uri, hoverData }) => {
  return (
    <Container>
      <div className="container">
        <img src={uri} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text">{`project ${hoverData}`}</div>
        </div>
      </div>
    </Container>
  );
};
export default ImageHover;
