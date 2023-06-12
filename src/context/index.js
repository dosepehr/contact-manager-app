import { createContext } from 'react';

const mainContext = createContext({
    setContacts: () => {},
    contacts: [],
});

export default mainContext;
