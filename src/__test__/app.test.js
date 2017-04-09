

////external dependencies:
import React from 'react';
import ReactDOM from 'react-dom';

import  chai from 'chai';


////need to better declare this should statement:
// require should = chai.should();


///internal dependencies:
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


