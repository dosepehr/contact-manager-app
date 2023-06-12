import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Contact } from './';
import mainContext from '../context';

const Contacts = () => {
    const { contacts } = useContext(mainContext);
    return (
        <div className='mx-auto px-5 sm:px-10 md:px-14 lg:px-28'>
            <Link
                className='bg-MainPink px-2 py-3 mx-auto block w-fit rounded-md'
                to='contact/add'
            >
                ساخت مخاطب جدید
            </Link>
            <div className='grid md:grid-cols-2 gap-4 grid-cols-1 mt-5'>
                {contacts.length > 0 &&
                    contacts.map((contact) => (
                        <Contact contact={contact} key={contact.id} />
                    ))}
            </div>
        </div>
    );
};

export default Contacts;
