import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../reducers/contactsSlice';
import { apiSlice } from '../api/apiSlice';
const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
