const propertyListReducer = (
  state: PropertyState = { list: null, selected: null, saved: null },
  action: PropertyAction
): PropertyState => {
  switch (action.type) {
    case 'SET_PROPERTY_LIST':
      return { ...state, list: action.payload };
    case 'CLEAR_PROPERTY':
      return { ...state, selected: null };
    case 'SET_PROPERTY':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default propertyListReducer;
