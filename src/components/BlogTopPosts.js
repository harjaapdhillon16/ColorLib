import React from 'react';
import styled from 'styled-components';

import PostListItem from './elements/PostListItem';

const Container = styled.div`
  .margin {
    margin-top: 2rem !important;
  }
`;
const TopPostData = [
  {
    image: true,
  },
  {
    image: true,
  },
  {
    image: true,
  },
  {
    image: true,
  },
  {
    image: true,
  },
  {
    image: true,
  },
];
const RecentPostData = [
  {
    border: true,
  },
  {
    border: true,
  },
  {
    border: true,
  },
  {
    border: true,
  },
  {
    border: true,
  },
  {
    border: true,
  },
];

const Posts = () => {
  return (
    <Container>
      <h1 className="subtitle margin is-4">Top Posts</h1>
      {TopPostData.map(data => (
        <PostListItem image={data.image} />
      ))}
      <h1 className="subtitle margin is-4">Recent Post</h1>
      {RecentPostData.map(data => (
        <PostListItem border={data.border} />
      ))}
    </Container>
  );
};
export default Posts;
