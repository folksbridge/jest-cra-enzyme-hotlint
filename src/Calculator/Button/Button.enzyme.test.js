import React from 'react';

// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import Button from '.';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Button number={0} />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// Enzyme.configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<Button number={0} />);
});
