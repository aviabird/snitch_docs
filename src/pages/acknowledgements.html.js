/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @emails snitch-core
 */

import Container from 'components/Container';
import Header from 'components/Header';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import React from 'react';
import {urlRoot} from 'site-constants';
import {sharedStyles} from 'theme';

import names from '../../content/acknowledgements.yml';

const Acknowlegements = ({data, location}) => (
  <Container>
    <div css={sharedStyles.articleLayout.container}>
      <div css={sharedStyles.articleLayout.content}>
        <Header>Acknowledgements</Header>
        <TitleAndMetaTags
          ogUrl={`${urlRoot}/acknowledgements.html`}
          title="Snitch - Acknowledgements"
        />

        <div css={sharedStyles.markdown}>
          <p>We'd like to thank all of our contributors:</p>

          <ul
            css={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            {names.map((name, index) => (
              <li
                css={{
                  flex: '1 0 200px',
                }}
                key={index}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default Acknowlegements;
