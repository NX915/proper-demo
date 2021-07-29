import { combineReducers } from 'redux';
import propertyListReducer from './property';
import StatusReducer from './status';

const allReducer = combineReducers({
  property: propertyListReducer,
  status: StatusReducer,
});
export default allReducer;
