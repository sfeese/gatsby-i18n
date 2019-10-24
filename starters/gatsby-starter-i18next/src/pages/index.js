import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from '../components/layout';

const IndexPage = () => (
  <Translation>
    {t => (
      <Layout>
        <h1>{t('pages.index.title')}</h1>
        <p>{t('pages.index.p1')}</p>
        <p>{t('pages.index.p2')}</p>
        <Link to="/page-2/">{t('common.goToPage', { page: 2 })}</Link>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
