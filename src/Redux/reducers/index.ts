import { combineReducers } from 'redux';
import propertyListReducer from './property';

const allReducer = combineReducers({ propertyList: propertyListReducer });
export default allReducer;
