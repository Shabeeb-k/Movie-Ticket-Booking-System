// src/redux/store.js
import {legacy_createStore as createStore } from 'redux';
import seatReducer from './reducers/seatReducer';

const store = createStore(seatReducer);

export default store;
