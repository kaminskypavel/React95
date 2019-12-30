import React from 'react';
import {storiesOf} from '@storybook/react';
import withClippy from '../.storybook/src/clippy-addon/clippy-addon';

import TaskBar from '../components/TaskBar';

function AlertStory() {
    return (
      <React.Fragment>
        <TaskBar />
      </React.Fragment>
    );
}

const code = `<TaskBar/>`;

storiesOf('Taskbar', module)
    .addDecorator(withClippy)
    .addParameters({code})
    .add('default', () => <AlertStory />);
