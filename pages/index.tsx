import React from 'react';
import DataProvider from './api/dataProvider';
import { Check, Close } from '@material-ui/icons';
import styled from 'styled-components';

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

const Ping = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.span`
  display: inline-block;
  font-size: 0.75em;
  margin: 0 1em;
  color: silver;
  line-height: 1;
`;

function SiteMonitor({ ping }) {
  return (
    <SiteList>
      {ping.map((site) => {
        return (
          <Site key={site.id}>
            <SiteName>{site.name}</SiteName>
            {site.alive ? (
              <Ping>
                <Time>{site.ping}ms</Time>
                <Check style={{ color: 'LightGreen' }} />
              </Ping>
            ) : (
              <Ping>
                <Close style={{ color: 'LightPink' }} />
              </Ping>
            )}
          </Site>
        );
      })}
    </SiteList>
  );
}

export async function getStaticProps() {
  const ping = await dataProvider.ping();
  return {
    props: {
      ping: ping.sites,
    },
  };
}

export default SiteMonitor;
