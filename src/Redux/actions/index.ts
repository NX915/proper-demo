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
        payload: res.map((property) => ({
          ...property,
          askingPriceFormmated: `${(property.askingPrice / 100)
            .toString()
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${
            property.type.toLowerCase() === 'rent' ||
            property.type.toLowerCase() === 'lease'
              ? '/month'
              : ''
          }`,
        })),
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

export const saveProperty = (data: Property): SavePropertyAction => {
  return {
    type: 'SAVE_PROPERTY',
    payload: data,
  };
};

export const deleteSaveProperty = (
  data: Property
): DeleteSavePropertyAction => {
  return {
    type: 'DELETE_SAVE_PROPERTY',
    payload: data,
  };
};
