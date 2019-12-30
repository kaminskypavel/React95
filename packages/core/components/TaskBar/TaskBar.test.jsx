import React from 'react';
import { render } from '@testing-library/react';
import TaskBar from './TaskBar';

describe('<TaskBar />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with error type', () => {
      const {container} = render(<TaskBar />);
      expect(container).toMatchSnapshot();
    });
});
});
