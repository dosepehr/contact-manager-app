import { createContext } from 'react';

const mainContext = createContext({
    setContacts: () => {},
    contacts: [],
    setGroups: () => {},
    groups: [],
    setContact: () => {},
    contact: {},
    setGroup: () => {},
    group: {},
    loading: false,
    setLoading: () => {},
    query: '',
    setQuery: () => {},
    filteredContacts: [],
    setFilteredContacts: () => {},
});

export default mainContext;
