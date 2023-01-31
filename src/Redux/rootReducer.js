import { combineReducers } from 'redux';
import contactsReducer from './Contacts/contactsSlice';
import filterReducer from './filterslice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});