// import Button from './button';
// import Card from './card';
// import Checkbox from './checkbox';
// import CheckboxGroup from './checkboxGroup';
// import Toggle from './toggle';

// export default {
//   Button,
//   Card,
//   Checkbox,
//   CheckboxGroup,
//   Toggle,
// };

import React from 'react';
import ReactDOM from 'react-dom';

import RadioButtonGroup from './radioButtonGroup';
import theme from './theme.scss';

const options = [{ label: 'Alpha' }, { label: 'Beta' }, { label: 'Zheta' }]
const RadioDisplay = () => (
  <div>
    <RadioButtonGroup
      theme={theme}
      options={options}
      inline
    />
  </div>
);

ReactDOM.render(<RadioDisplay />, document.getElementById('index'));