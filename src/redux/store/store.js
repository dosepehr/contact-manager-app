import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import contactsSlice from '../reducers/contactsSlice';
import groupsSlice from '../reducers/groupsSlice';
const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        groups: groupsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
