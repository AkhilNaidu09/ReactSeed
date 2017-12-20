var initialAppState = {
  serverError: false,
  errorMessage: ''
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SetToastMessage':
      return (state = action.state);
    case 'ResetToastMessage':
      return (state = initialAppState);
    default:
      return initialAppState
  }
}

export default AppReducer;