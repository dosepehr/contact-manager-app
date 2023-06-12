import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5122' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
        }),
        getContact: builder.query({
            query: (id) => `/contacts/${id}`,
        }),
        addNewContact: builder.mutation({
            query: (contactData) => ({
                url: '/contacts',
                method: 'POST',
                body: contactData,
            }),
        }),
        updateContact: builder.mutation({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PUT',
                body: contact,
            }),
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetContactsQuery,
    useGetContactQuery,
    useAddNewContactMutation,
    useDeleteContactMutation,
    useUpdateContactMutation,
} = apiSlice;
