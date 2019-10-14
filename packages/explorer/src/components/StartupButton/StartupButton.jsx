import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@react95/core';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  align-items: center;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 2px 4px 0;

  &:active {
    padding: 2px 3px 0 5px;

    box-shadow: inset 0 0 0 1px #868a8e, 0 0 0 1px #000;
  }
`;

const StartupButton = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <Icon
      name="windows95_logo"
      style={{
        width: 22,
        height: 22,
        marginRight: 4,
      }}
    />
    Start
  </StyledButton>
);

StartupButton.propTypes = {
  onClick: PropTypes.func,
};

StartupButton.defaultProps = {
  onClick: undefined,
};

export default StartupButton;
