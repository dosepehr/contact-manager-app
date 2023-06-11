import React from 'react';

const AddContact = () => {
    return (
        <div className='mx-auto sm:px-10 md:px-14 lg:px-28 relative'>
            <img
                src='man-taking-note.png'
                className='absolute z-[-1] opacity-40 left-0 max-w-3xl'
                alt=''
            />
            <p className='text-MainGreen text-xl text-center '>
                ساخت مخاطب جدید
            </p>
            <div className='px-10 md:w-1/2 xl:w-1/3 mt-10 '>
                <form action='' className='w-full space-y-3'>
                    <input
                        type='text'
                        placeholder='نام و نام خانوادگی'
                        className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2'
                    />
                    <input
                        type='text'
                        placeholder='آدرس تصویر'
                        className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2'
                    />
                    <input
                        type='text'
                        placeholder='شماره موبایل'
                        className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2'
                    />
                    <input
                        type='text'
                        placeholder='آدرس ایمیل'
                        className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2'
                    />
                    <input
                        type='text'
                        placeholder='شغل'
                        className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2'
                    />
                    <select
                        name=''
                        id=''
                        className='w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                    >
                        <option value='' className='text-white'>
                            انتخاب گروه
                        </option>
                    </select>
                    <div className='flex justify-center'>
                        <button className='bg-MainPurple p-2 rounded-md ml-5'>
                            ساخت مخاطب
                        </button>
                        <button className='bg-MainComment p-2 rounded-md'>
                            انصراف
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContact;
