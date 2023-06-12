import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContact } from '../services/contactServices';
import { useContext } from 'react';
import mainContext from '../context';
import { getgroup } from '../services/groupsServices';
import Spinner from './Spinner';
const ContactDetails = () => {
    const { id } = useParams();
    const { contact, setContact, group, setGroup, loading, setLoading } =
        useContext(mainContext);
    useEffect(() => {
        const fetchContact = async () => {
            try {
                setLoading(true);

                const { data } = await getContact(id);
                const { data: contactGroup } = await getgroup(+data.group);
                setContact(data);
                setGroup(contactGroup);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        fetchContact();
    }, [id, setContact, setGroup]);
    return (
        <div>
            <p className='text-MainCyan text-xl text-center font-bold mb-4'>
                اطلاعات مخاطب
            </p>
            {loading ? (
                <Spinner />
            ) : (
                Object.keys(contact).length > 0 && (
                    <div className='mx-auto px-5 md:px-14'>
                        <div className='bg-MainCurrentline flex flex-col md:flex-row items-center p-10 rounded-md'>
                            <img
                                src={contact.photo || `default.png`}
                                className='w-64 aspect-square rounded-md border border-MainPurple '
                            />
                            <div className='w-full md:pr-10 max-w-lg lg:max-w-3xl mx-auto '>
                                <div className='flex flex-col bg-MainForground mt-5 justify-center py-4 rounded-md space-y-6 divide-y divide-MainComment'>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            نام و نام خانوادگی:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {contact.name}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            شماره موبایل:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {contact.mobile}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            ایمیل:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {contact.email}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            شغل:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {contact.job}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            گروه:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {group.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ContactDetails;
