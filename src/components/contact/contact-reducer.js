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
      return initialContactState;
    default:
      return initialContactState
  }
}

export default ContactsReducer;