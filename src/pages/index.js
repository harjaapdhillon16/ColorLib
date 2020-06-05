import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import HomeSeoLaptop from '../components/HomeSeoLaptop';
import SmallParallax from '../components/SmallParallax';
import IndexLimitless from '../components/IndexLimitless';
import IndexProjects from '../components/IndexProjects';
import WordpressThemeDownload from '../components/WordpressThemeDownload';

const Container = styled.div`
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
            <IndexLimitless />
            <img
              src="https://colorlib.com/shapely/wp-content/uploads/sites/12/2016/12/photo-1440557653082-e8e186733eeb-1.jpg"
              alt="nature"
            />
            <IndexProjects />
            <WordpressThemeDownload />
          </Container>
        </section>
      </Layout>
    );
  }
}
