import React from 'react';
import DataProvider from './api/dataProvider';
import styled from 'styled-components';
import config from '../config.json';

import Ping from './components/ping';

const dataProvider = new DataProvider();

const SiteList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
`;

const Site = styled.li`
  display: flex;
  width: 33%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

const SiteName = styled.h1`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 200;
  color: rgb(75, 75, 75);
`;

function SiteMonitor() {
  return (
    <SiteList>
      {config.sites.map((site) => {
        return (
          <Site key={site.id}>
            <SiteName>{site.name}</SiteName>
            <Ping url={site.url} />
          </Site>
        );
      })}
    </SiteList>
  );
}

export default SiteMonitor;
