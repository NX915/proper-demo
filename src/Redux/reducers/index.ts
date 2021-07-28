import { combineReducers } from 'redux';
import propertyListReducer from './property';

const allReducer = combineReducers({ property: propertyListReducer });
export default allReducer;
