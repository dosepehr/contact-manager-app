import { createContext } from 'react';

const mainContext = createContext({
    setContacts: () => {},
    contacts: [],
    setGroups: () => {},
    groups: [],
    setContact: () => {},
    contact: {},
});

export default mainContext;
