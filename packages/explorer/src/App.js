import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle, Frame, Tooltip, Icon } from '@react95/core';

import StartupButton from './components/StartupButton';
import StartupList from './components/StartupList';
import ShutDown from './components/ShutDown';

const StartupMenu = styled(Frame)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
`;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
const getTime = date => `${date.getHours()}:${date.getMinutes()}`;

function App() {
  const [time, setTime] = useState(new Date());

  const [menuActive, setMenuActive] = useState(false);
  const [shutDownVisible, setShutDownVisible] = useState(false);

  useInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <>
      <GlobalStyle />
      <StartupMenu width="100%">
        <StartupButton
          active={menuActive}
          onClick={() => setMenuActive(!menuActive)}
        />
        {menuActive && <StartupList setShutDownVisible={setShutDownVisible} />}
        <Frame style={{ display: 'flex', alignItems: 'center' }} inset>
          <Icon name="unmute" width="16" height="16" />
          <Tooltip delay={10}>
            <span style={{ marginLeft: 10, marginRight: 6 }}>
              {getTime(time)}
            </span>
          </Tooltip>
        </Frame>
      </StartupMenu>
      {shutDownVisible && <ShutDown setShutDownVisible={setShutDownVisible} />}
    </>
  );
}

export default App;
