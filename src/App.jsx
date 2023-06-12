import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import mainContext from './context';
import { getContacts } from './services/contactServices';
function App() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const { data } = await getContacts();
                setContacts(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchContacts();
    }, []);

    return (
        <>
            <mainContext.Provider
                value={{
                    setContacts,
                    contacts,
                }}
            >
                <Navbar />
                <Outlet />
            </mainContext.Provider>
        </>
    );
}

export default App;
