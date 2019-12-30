import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from "../Button";
import Icon from "../Icon";

const Wrapper = styled.div`
  flex: 1 0 auto;
  height: 800px;
  flex-direction: revert;
`

const Bar = styled.footer`
  padding: 3px;
  background-color: #c3c7cb;
  box-shadow: inset 1px 1px 0px 1px #ffffff`;


const TaskBar = ({onStart}) => {
    return (
      <Wrapper>
        <Bar>
          <Button onClick={onStart} style={{display: 'flex', flexDirection: 'row'}}>
            <Icon style={{alignSelf: 'center', maxHeight: 20,maxWidth: 20, padding: 0,margin:0,flex:1}} name="logo" />
            <b style={{alignSelf: 'center', paddingLeft: 5}}>Start</b>
          </Button>
        </Bar>
      </Wrapper>
    );
};

TaskBar.displayName = 'TaskBar';

TaskBar.propTypes = {
    onStart: PropTypes.func,
};

TaskBar.defaultProps = {
    onStart: () => {
    },
};

export default TaskBar;
