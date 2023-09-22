import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { useGetContactQuery, useGetGroupQuery } from '../redux/api/apiSlice';
const ContactDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetContactQuery(id);
    const { data: group } = useGetGroupQuery(+data?.group);
    return (
        <div>
            <p className='text-MainCyan text-xl text-center font-bold mb-4'>
                اطلاعات مخاطب
            </p>
            {isLoading ? (
                <Spinner />
            ) : (
                Object.keys(data).length > 0 && (
                    <div className='mx-auto px-5 md:px-14'>
                        <div className='bg-MainCurrentline flex flex-col md:flex-row items-center p-10 rounded-md'>
                            <img
                                src={data.photo || `default.png`}
                                className='w-64 aspect-square rounded-md border border-MainPurple '
                            />
                            <div className='w-full md:pr-10 max-w-lg lg:max-w-3xl mx-auto '>
                                <div className='flex flex-col bg-MainForground mt-5 justify-center py-4 rounded-md space-y-6 divide-y divide-MainComment'>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            نام و نام خانوادگی:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {data.name}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            شماره موبایل:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {data.mobile}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            ایمیل:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {data.email}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            شغل:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {data.job}
                                        </p>
                                    </div>
                                    <div className='flex w-full items-center justify-center'>
                                        <p className='ml-2 text-MainCurrentline'>
                                            گروه:
                                        </p>
                                        <p className='text-MainCurrentline'>
                                            {group?.name || 'نامشخص'}
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
