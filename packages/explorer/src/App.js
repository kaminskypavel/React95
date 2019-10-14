import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle, Frame } from '@react95/core';

import StartupButton from './components/StartupButton';
import StartupList from './components/StartupList';
import ShutDown from './components/ShutDown';

const StartupMenu = styled(Frame)`
  position: absolute;
  bottom: 0;
`;

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [shutDownVisible, setShutDownVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <StartupMenu width="100%">
        <StartupButton
          active={menuActive}
          onClick={() => setMenuActive(!menuActive)}
        />
        {menuActive && <StartupList setShutDownVisible={setShutDownVisible} />}
      </StartupMenu>
      {shutDownVisible && <ShutDown setShutDownVisible={setShutDownVisible} />}
    </>
  );
}

export default App;
