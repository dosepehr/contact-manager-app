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
        // groups
        getGroups: builder.query({
            query: () => '/groups',
        }),
        getGroup: builder.query({
            query: (id) => `/groups/${id}`,
        }),
        addNewgroup: builder.mutation({
            query: (groupData) => ({
                url: '/groups',
                method: 'POST',
                body: groupData,
            }),
        }),
        updateGroup: builder.mutation({
            query: (group) => ({
                url: `/groups/${group.id}`,
                method: 'PUT',
                body: group,
            }),
        }),
        deleteGroup: builder.mutation({
            query: (id) => ({
                url: `/groups/${id}`,
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

    useGetGroupQuery,
    useGetGroupsQuery,
    useAddNewgroupMutation,
    useDeleteGroupMutation,
    useUpdateGroupMutation,
} = apiSlice;
