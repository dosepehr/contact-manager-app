import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

const slice = createSlice({
    name: 'contacts',
    initialState,
});

export default slice.reducer;
