var initialContactState = {
  FirstName: 'Akhil',
  LastName: 'Kumar',
  MiddleName: 'Anneboina'
};

const ContactsReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_Hello':
      return initialContactState;
    case 'Get_State':
      return state = initialContactState;
    default:
      return state
  }
}

export default ContactsReducer;