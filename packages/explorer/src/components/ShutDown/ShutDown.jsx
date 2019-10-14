import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Icon, RadioButton } from '@react95/core';

const ShutDownModal = styled(Modal)`
  position: absolute;
  top: calc(50% - 347px / 2);
  left: calc(50% - 222px / 2);
`;

const ShutDownWrapper = styled.div`
  display: flex;
  padding-top: 18px;
  padding-left: 10px;
`;

const ShutDownChoices = styled.div`
  flex-grow: 1;
  margin-left: 18px;
`;

const ShutDownMessage = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
`;

const ShutDown = ({ setShutDownVisible }) => {
  const [selectedOption, setSelectedOption] = useState('shutdown');

  return (
    <ShutDownModal
      title="Shut Down Windows"
      buttons={[
        { value: 'Yes', onClick: () => window.location.reload() },
        { value: 'No', onClick: () => setShutDownVisible(false) },
      ]}
      width="347"
      height="222"
    >
      <ShutDownWrapper>
        <Icon name="computer_4" />
        <ShutDownChoices>
          <ShutDownMessage>Are you sure you want to:</ShutDownMessage>
          <RadioButton
            name="shutdown"
            value="shutdown"
            checked={selectedOption === 'shutdown'}
            onChange={() => setSelectedOption('shutdown')}
          >
            Shut down the computer?
          </RadioButton>
          <RadioButton
            name="shutdown"
            value="restart"
            checked={selectedOption === 'restart'}
            onChange={() => setSelectedOption('restart')}
          >
            Restart the computer?
          </RadioButton>
        </ShutDownChoices>
      </ShutDownWrapper>
    </ShutDownModal>
  );
};

export default ShutDown;
