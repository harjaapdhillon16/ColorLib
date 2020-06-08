import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import TopSection from '../components/TopSection';
import BlogLeftSide from '../components/BlogLeftSide';
import BlogRightSide from '../components/BlogRightSide';

const Container = styled.div`
  width: 100% !important;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <Container>
          <TopSection title="Blog" />
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-8">
                <BlogLeftSide />
              </div>
              <div className="column is-4">
                <BlogRightSide />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
