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
});

export default mainContext;
