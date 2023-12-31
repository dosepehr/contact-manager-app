import { Link } from 'react-router-dom';
import { Contact, Spinner } from './';
import { useGetContactsQuery } from '../redux/api/apiSlice';
const Contacts = () => {
    const { data, isLoading } = useGetContactsQuery();
    return (
        <div className='mx-auto px-5 sm:px-10 md:px-14 lg:px-28'>
            <div className='flex'>
                <Link
                    className='bg-MainPink px-2 py-3 mx-auto block w-fit rounded-md'
                    to='contact/add'
                >
                    ساخت مخاطب جدید
                </Link>
                <Link
                    className='bg-MainPink px-2 py-3 mx-auto block w-fit rounded-md mr-5'
                    to='groups'
                >
                    مشاهده گروه ها
                </Link>
            </div>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className='grid md:grid-cols-2 gap-4 grid-cols-1 mt-5'>
                    {data.length > 0 &&
                        data.map((contact) => (
                            <Contact contact={contact} key={contact.id} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default Contacts;
