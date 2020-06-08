import React from 'react';
import styled from 'styled-components';

import BlogInputBox from './BlogInputBox';
import BlogTopPosts from './BlogTopPosts';

const Section = styled.section`
  input {
    box-shadow: none !important;
  }
`;
const Container = styled.div`
  width: 100%;
`;

const BlogRightSide = () => {
  return (
    <Container>
      <Section className="section">
        <BlogInputBox />
        <BlogTopPosts />
      </Section>
    </Container>
  );
};
export default BlogRightSide;
