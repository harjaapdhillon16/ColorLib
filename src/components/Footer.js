import React from 'react';
import styled from 'styled-components';

import { theme } from '../utils/theme';

const FooterHTML = styled.footer`
  background-color: ${theme.navyBlueBackground};
  padding: 4rem;
  section {
    padding: 10px;
  }
  .subtitle {
    color: ${theme.backgroundColor} !important;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;
const Images = [
  {
    uri:
      'https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-black-2019.png',
    alt: 'facebook',
  },
  {
    uri:
      'https://i2.wp.com/www.key-digital.co.uk/wp-content/uploads/2017/04/Twitter-logo-1.png',
    alt: 'twitter',
  },
  {
    uri:
      'https://statesborodowntown.com/wp-content/uploads/2016/01/instagram-Logo-PNG-Transparent-Background-download.png',
    alt: 'instagram',
  },
];

const Footer = () => {
  return (
    <FooterHTML className="footer">
      <section>
        <div className="container">
          <div className="columns is-multiline ">
            <div className="column is-4">
              <h1 className="subtitle is-6">
                Theme by ColorLib Powered by WordPress
              </h1>
            </div>
            <div className="column is-4" />
            <div className="column is-4 ">
              {Images.map(data => (
                <img
                  className="is-pulled-right	"
                  src={data.uri}
                  alt={data.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </FooterHTML>
  );
};
export default Footer;
