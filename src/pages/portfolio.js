import React from 'react';
import styled from 'styled-components';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

import TopSection from '../components/TopSection';
import PortfolioProject from '../components/PortfolioProject';

const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <TopSection title="Portfolio" />
    <PortfolioProject />
  </Layout>
);

export default Contact;
