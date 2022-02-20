import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../services/contacts.API';
import { filter } from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});