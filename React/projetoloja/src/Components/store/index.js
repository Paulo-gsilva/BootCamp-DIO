import { createStore } from 'redux'; //reponsável por criar o estado global

import rootReducer from './reducers';

const store = createStore(rootReducer); //criar estado global com rootReducer

export default store;