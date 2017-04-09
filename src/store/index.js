import {React, applyMiddleware, compose, createStore} from 'redux';

import thunk from 'react-thunk';

import reducer from './reducer';

export default createStore(reducer, applyMiddleware(thunk));