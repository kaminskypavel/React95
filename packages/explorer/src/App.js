import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, Frame, Icon } from '@react95/core';

import StartupButton from './components/StartupButton';

const StartupMenu = styled(Frame)`
  position: absolute;
  bottom: 0;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StartupMenu width="100%">
        <StartupButton />
      </StartupMenu>
    </>
  );
}

export default App;
