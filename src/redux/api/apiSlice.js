import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5122' }),
    tagTypes: ['CONTACT', 'GROUP'],
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: (result = [], error, arg) => [
                'CONTACT',
                ...result.map(({ id }) => ({ type: 'CONTACT', id })),
            ],
        }),
        getContact: builder.query({
            query: (id) => `/contacts/${id}`,
            providesTags: (result, error, arg) => [
                { type: 'CONTACT', id: arg },
            ],
        }),
        addNewContact: builder.mutation({
            query: (contactData) => ({
                url: '/contacts',
                method: 'POST',
                body: contactData,
            }),
            invalidatesTags: ['CONTACT'],
        }),
        updateContact: builder.mutation({
            query: (contact) => ({
                url: `/contacts/${contact.id}`,
                method: 'PUT',
                body: contact,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'CONTACT', id: arg.id },
            ],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['CONTACT'],
        }),
        // groups
        getGroups: builder.query({
            query: () => '/groups',
            providesTags: (result = [], error, arg) => [
                'GROUP',
                ...result.map(({ id }) => ({ type: 'GROUP', id })),
            ],
        }),
        getGroup: builder.query({
            query: (id) => `/groups/${id}`,
            providesTags: (result, error, arg) => [{ type: 'GROUP', id: arg }],
        }),
        addNewgroup: builder.mutation({
            query: (groupData) => ({
                url: '/groups',
                method: 'POST',
                body: groupData,
            }),
            invalidatesTags: ['GROUP'],
        }),
        updateGroup: builder.mutation({
            query: (group) => ({
                url: `/groups/${group.id}`,
                method: 'PUT',
                body: group,
            }),
            invalidatesTags: (result, error, arg) => [
                { type: 'GROUP', id: arg.id },
            ],
        }),
        deleteGroup: builder.mutation({
            query: (id) => ({
                url: `/groups/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GROUP'],
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
