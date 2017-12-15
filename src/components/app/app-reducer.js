var initialAppState = {
   serverError:false,
   errorMessage:''
  };
  
  const AppReducer = (state, action) => {
    switch (action.type) {
      case 'SetToastMessage':
        return action.state;
      default:
        return initialAppState
    }
  }
  
  export default AppReducer;