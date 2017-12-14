var initialContactState = {
  FirstName: 'Akhil',
  LastName: 'Kumar',
  MiddleName: 'Anneboina'
};

const LoginReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_Hello':
      return initialContactState;
    default:
      return initialContactState
  }
}

export default LoginReducer;