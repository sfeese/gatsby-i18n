import React from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from '../components/layout';

const SecondPage = () => (
  <Translation>
    {t => (
      <Layout>
        <h1>{t('pages.page-2.title')}</h1>
        <p>{t('pages.page-2.p1')}</p>
        <Link to="/">{t('common.goToHome')}</Link>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(SecondPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
