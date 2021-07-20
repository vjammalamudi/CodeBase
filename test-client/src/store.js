import {createStore,combineReducers} from 'redux';

import userreducer from './store/userreducer';
import todoreducer from './store/todoreducer';

const rootReducer =combineReducers( {
    
    user: userreducer,
    todo: todoreducer
})

const store = createStore(rootReducer)


export default store;