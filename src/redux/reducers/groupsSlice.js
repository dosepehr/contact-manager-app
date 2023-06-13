import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const groupAdapter = createEntityAdapter()

const initialState = groupAdapter.getInitialState()

const slice = createSlice({
    name: 'groups',
    initialState
})

export default slice.reducer