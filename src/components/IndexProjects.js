import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

import ImageHover from './elements/ImageHover';

const Container = styled.div`
  margin-top: -3px;
  background-color: ${theme.navyBlueBackground};
  h1 {
    color: ${theme.backgroundColor} !important;
  }
  .is-6 {
    font-size: 0.8rem;
  }
  img {
  }
`;
const uri = [
  'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
  'https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
  'https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
];
const IndexProject = () => {
  return (
    <Container>
      <div>
        <section className="section">
          <h1 className="subtitle is-3">Our Latest Projects</h1>
          <h1 className="subtitle is-6">
            Here is our latest projects. You&#39;ll love them.
          </h1>
        </section>
      </div>
      <div className="columns is-multiline is-gapless">
        {uri.map((data, i) => (
          <div className="column is-3">
            <ImageHover uri={data} hoverData={i + 1} />
          </div>
        ))}
      </div>
    </Container>
  );
};
export default IndexProject;
