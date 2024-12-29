import React, { useMemo, useReducer } from 'react';
import Contact from '../components/Contact';

const initialState = {
  contactDetails: {
    address: '123 Main Street, Cityville, USA',
    email: 'Arshpreet@gmail.com',
    phone: '+1 (123) 456-7890',
    socialLinks: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'github', url: 'https://github.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACT_DETAILS':
      return { ...state, contactDetails: action.payload };
    default:
      return state;
  }
};

const ContactUsPage = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const contactDetails = useMemo(() => state.contactDetails, [state.contactDetails]);

  const updateContactDetails = (newDetails) => {
    dispatch({ type: 'UPDATE_CONTACT_DETAILS', payload: newDetails });
  };

  return (
    <div>
      <Contact contactDetails={contactDetails} updateContactDetails={updateContactDetails} />
    </div>
  );
};

export default ContactUsPage;
