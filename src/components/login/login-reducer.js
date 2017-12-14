var initialLoginState = {
  username: '',
  password: '',
  formErrors: {username: '', password: ''},
  usernameValid: false,
  passwordValid: false,
  formValid: false
};

const LoginReducer = (state, action) => {
  switch (action.type) {
    case 'SetFormValidity':
      return state;
    default:
      return initialLoginState
  }
}

export default LoginReducer;