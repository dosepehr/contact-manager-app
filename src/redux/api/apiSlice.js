import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5122' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
        }),
    }),
});

export const { useGetContactsQuery } = apiSlice;
