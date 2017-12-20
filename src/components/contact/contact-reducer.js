var initialContactState = {
  FirstName: 'Akhil',
  LastName: 'Kumar',
  Email:'test@gmail.com',
  PhoneNumber:1234567890,
  ZipCode:500032
};

const ContactsReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_Hello':
      return state.initialContactState = action.state;
      // case 'SetToastMessage':
      // return (state = action.state);
    default:
      return initialContactState
  }
}

export default ContactsReducer;