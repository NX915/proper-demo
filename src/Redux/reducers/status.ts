const StatusReducer = (
  state: StatusState = { loading: false, message: null },
  action: statusAction
): StatusState => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false, message: action.payload };
    default:
      return state;
  }
};

export default StatusReducer;
