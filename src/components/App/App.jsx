import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContactsThunk } from 'Redux/Contacts/contactsOperations';
import { PhonebookTitle, Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />

      <Filter />
      <ContactList />
    </Wrapper>
  );
};