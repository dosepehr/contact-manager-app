import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Contact } from './';
import { getContacts } from '../services/contactServices';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const { data } = await getContacts();
            setContacts(data);
        };
        fetchContacts();
    }, []);
    return (
        <div className='mx-auto sm:px-10 md:px-14 lg:px-28'>
            <Link
                className='bg-MainPink px-2 py-3 mx-auto block w-fit rounded-md'
                to='create-contact'
            >
                ساخت مخاطب جدید
            </Link>
            <div className='grid md:grid-cols-2 gap-4 grid-cols-1 mt-5'>
                {contacts.length > 0 &&
                    contacts.map((contact) => <Contact {...contact} />)}
            </div>
        </div>
    );
};

export default Contacts;
