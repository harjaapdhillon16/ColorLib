import React from 'react';
import styled from 'styled-components';

import ImageDownText from './elements/ImageDownText';
import BlogCard from './BlogCard';

const uri =
  'https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1453282716202-de94e528067c-1-768x546.jpg';

const Container = styled.div`
  width: 100%;
`;
const Section = styled.section`
  .is-6 {
    font-size: 0.9rem;
  }
`;

const Data = [
  {
    button: true,
  },
  {
    button: false,
  },
  {
    button: false,
  },
  {
    button: true,
  },
  {
    button: false,
  },
  {
    button: true,
  },
  {
    button: true,
  },
  {
    button: false,
  },
  {
    button: true,
  },
  {
    button: true,
  },
];

const BlogLeftSide = () => {
  return (
    <Container>
      <Section className="section">
        <div className="container">
          <ImageDownText uri={uri} text="NEWS" />
          <h1 className="title has-text-weight-normal is-1">
            Template: Sticky
          </h1>
          <h1 className="subtitle has-text-grey  is-6"> January 7,2016</h1>
          <h1 className="subtitle has-text-grey  is-6">
            This is a sticky post
          </h1>
          <h1 className="subtitle has-text-grey  is-6">
            There are a few thing to verify
          </h1>
          <div className="columns is-multiline">
            {Data.map(data => (
              <div className="column is-6">
                <BlogCard button={data.button} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
};
export default BlogLeftSide;
