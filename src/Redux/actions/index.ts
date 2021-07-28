import { Dispatch } from 'redux';
import propertyList from '../../Mock/property';

export const fetchStart = (): Action => {
  return {
    type: 'FETCH_START',
  };
};

export const fetchSuccess = (): Action => {
  return {
    type: 'FETCH_SUCCESS',
  };
};

export const fetchError = (msg: string): Action => {
  return {
    type: 'FETCH_ERROR',
    payload: msg,
  };
};

export const displayMessage = (msg: string): Action => {
  return {
    type: 'DISPLAY_MESSAGE',
    payload: msg,
  };
};

export const fetchPropertyList = () => {
  return async (dispatch: Dispatch<Action>) => {
    const res = propertyList;
    setTimeout(() => {
      dispatch({
        type: 'SET_PROPERTY_LIST',
        payload: res,
      });
    }, Math.random() * 3000);
  };
};

export const setProperty = (data: Property): SetPropertyAction => {
  return {
    type: 'SET_PROPERTY',
    payload: data,
  };
};

export const clearProperty = (): Action => {
  return {
    type: 'CLEAR_PROPERTY',
  };
};
