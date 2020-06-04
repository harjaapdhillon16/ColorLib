import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomeSeoLaptop from '../components/HomeSeoLaptop';
import SmallParallax from '../components/SmallParallax';

const Container = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" description="Welcome to GatsbyJs v1" />
        <section>
          <Container>
            <HomeHero />
            <HomeSeoLaptop />
            <HomeSeoLaptop reverse />
            <SmallParallax />
          </Container>
        </section>
      </Layout>
    );
  }
}
