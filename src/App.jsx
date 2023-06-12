import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import mainContext from './context';
import { getAllContacts } from './services/contactServices';
import { getAllgroups } from './services/groupsServices';
function App() {
    const [contacts, setContacts] = useState([]);
    const [groups, setGroups] = useState([]);
    const [contact, setContact] = useState([]);
    const [group, setGroup] = useState({});
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [filteredContacts, setFilteredContacts] = useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true);
                const { data } = await getAllContacts();
                setContacts(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        const fetchGroups = async () => {
            try {
                setLoading(true);
                const { data } = await getAllgroups();
                setGroups(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
        fetchGroups();
    }, []);

    useEffect(() => {
        setFilteredContacts(
            contacts.filter((contact) =>
                contact.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, contacts]);
    return (
        <>
            <mainContext.Provider
                value={{
                    setContacts,
                    contacts,
                    setGroups,
                    groups,
                    setContact,
                    contact,
                    setGroup,
                    group,
                    loading,
                    setLoading,
                    query,
                    setQuery,
                    filteredContacts,
                    setFilteredContacts,
                }}
            >
                <Navbar />
                <Outlet />
            </mainContext.Provider>
        </>
    );
}

export default App;
