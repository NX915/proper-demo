type Action = {
  type: string;
  payload?:
    | string
    | number
    | Record<string, unknown>
    | Record<string, unknown>[];
};

type Property = {
  mlsNumber: string;
  status: string;
  class: string;
  type: string;
  daysOnMarket: number;
  occupancy: string;
  listDate: string;
  askingPrice: number;
  askingPriceFormmated?: string;
  updatedOn: string;
  photoUrl: string[];
  address: {
    street: string;
    area: string;
    city: string;
    province: string;
    country: string;
  };
};

type PropertyList = Property[] | null;

type PropertySavedList = Property[] | null;

interface PropertyState {
  list: PropertyList | null;
  selected: Property | null;
  saved: PropertySavedList | null;
}

type SetPropertyAction = {
  type: 'SET_PROPERTY';
  payload: Property;
};

type ClearPropertyAction = {
  type: 'CLEAR_PROPERTY';
};

type SetPropertyListAction = {
  type: 'SET_PROPERTY_LIST';
  payload: PropertyList;
};

type SavePropertyAction = {
  type: 'SAVE_PROPERTY';
  payload: Property;
};

type DeleteSavePropertyAction = {
  type: 'DELETE_SAVE_PROPERTY';
  payload: Property;
};

type PropertyAction =
  | SetPropertyAction
  | SetPropertyListAction
  | ClearPropertyAction;
