import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BlogTopSection from '../components/BlogTopSection';
import BlogLeftSide from '../components/BlogLeftSide';

const Container = styled.div``;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <section>
          <Container>
            <BlogTopSection />
            <div className="container">
              <div className="columns is-multiline">
                <div className="column is-8">
                  <BlogLeftSide />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    );
  }
}
