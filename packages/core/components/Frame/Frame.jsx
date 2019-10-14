import PropTypes from 'prop-types';
import styled from 'styled-components';

const Frame = styled.div`
  background-color: #c3c7cb;
  padding: 4px;
  border: none;

  box-shadow: inset 0.5px 0.5px 0px 0.5px #ffffff, inset 0 0 0 1px #868a8e,
    1px 0px 0 0px #000, 0px 1px 0 0px #000, 1px 1px 0 0px #000;

  ${({ width, height, inset }) => `
    width: ${width};
    height: ${height};

    ${
      inset
        ? `
      box-shadow: 0px 0px 0px 0px inset, #868a8e 1px 1px 0px 0px inset, #fff 0.5px 0.5px 0px 0.5px
    `
        : ''
    }
  `}
`;

Frame.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Frame.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default Frame;
