import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List } from '@react95/core';

const StyledList = styled(List)`
  padding-left: 30px;

  position: absolute;
  bottom: 34px;
  left: 2px;
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 2px;

  padding-right: 2px;
  padding-top: 10px;

  height: calc(100% - 2px);

  background-color: #808080;
  color: #c0c0c0;
  font-size: 22px;
  font-weight: bold;

  writing-mode: vertical-rl;
  transform: rotate(180deg);
`;

const StyledSpan = styled.span`
  color: #fff;
  font-size: inherit;
  font-weight: normal;
`;

const StartupList = ({ setShutDownVisible }) => (
  <>
    <StyledList>
      <Title>
        Windows<StyledSpan>95</StyledSpan>
      </Title>
      <List.Item icon="folder_exe">Programs</List.Item>
      <List.Item icon="folder_file">Documents</List.Item>
      <List.Item icon="settings">Settings</List.Item>
      <List.Item icon="file_find2">Find</List.Item>
      <List.Item icon="help_book">Help</List.Item>
      <List.Item icon="bat_wait">Run...</List.Item>
      <List.Divider />
      <List.Item icon="computer_3" onClick={() => setShutDownVisible(true)}>
        Shut Down...
      </List.Item>
    </StyledList>
  </>
);

StartupList.propTypes = {
  setShutDownVisible: PropTypes.func.isRequired,
};

export default StartupList;
