import React, { useState } from 'react';
import styled from 'styled-components';
import { Check, Close } from '@material-ui/icons';
import DataProvider from '../api/dataProvider';
const Container = styled.div`
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

interface PingProps {
  url: string;
}

const dataProvider = new DataProvider();

const Ping: React.FC<PingProps> = ({ url }) => {
  const [data, setData] = useState({ alive: false, ping: null });
  dataProvider.ping(url).then((res) => {
    console.log(res);
    setData(res);
  });
  return (
    <Container>
      {data.ping && <Time>{`${data.ping}ms`}</Time>}
      {data.alive ? (
        <Check style={{ color: 'green' }} />
      ) : (
        <Close style={{ color: 'red' }} />
      )}
    </Container>
  );
};

export default Ping;
