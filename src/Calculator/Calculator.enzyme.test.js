import React from 'react';

// import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calculator from '.';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Calculator />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

Enzyme.configure({ adapter: new Adapter() });
it('shallow renders without crashing', () => {
  shallow(<Calculator />);
});
