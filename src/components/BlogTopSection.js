import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const Section = styled.section`
  min-height: 12rem;
  width: 100%;
  background-color: ${theme.lightShades};
`;

const BlogTopSection = () => {
  return (
    <Section className="">
      <div className="hero-body">
        <div className="container">
          <h2 className="subtitle is-3">Blog</h2>
        </div>
      </div>
    </Section>
  );
};
export default BlogTopSection;
