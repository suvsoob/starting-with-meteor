import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from 'meteor/react-meteor-data';

export const ContactList = () => {
  const contacts = useTracker(() => ContactsCollection.find({}).fetch());

  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.map(contact => (
          <li key={contact.email}>{ contact.name } - { contact.email }</li>
        ))}
      </ul>
    </>
  ); 
};