var initialContactState = {
  FirstName: 'Akhil',
  LastName: 'Kumar',
  MiddleName: 'Anneboina'
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