import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import contactsSchema from '../validations/contactsSchema';
import { useNavigate, useParams } from 'react-router-dom';
import { getContact, putContact } from '../services/contactServices';
import { toast } from 'react-toastify';

const EditContact = () => {

    const groups = [
        {
            id: '1',
            name: 'همکار',
        },
        {
            id: '2',
            name: 'دوست',
        },
        {
            id: '3',
            name: 'فامیل',
        },
        {
            id: '4',
            name: 'سرویس',
        },
        {
            id: '5',
            name: 'آشنا',
        },
    ];
    return (
        <div className='mx-auto sm:px-10 md:px-14 lg:px-28 relative'>
            <img
                src='/man-taking-note.png'
                className='absolute z-[-1] opacity-40 left-0 max-w-3xl'
                alt=''
            />
            <p className='text-MainGreen text-xl text-center font-bold'>
                ویرایش مخاطب {contact.name}
            </p>
            <div className='px-10 md:w-1/2 xl:w-1/3 mt-10 '>
                {Object.keys(contact).length > 0 && (
                    <Formik
                       
                        validationSchema={contactsSchema}
                    >
                        <Form className='w-full space-y-3'>
                            <Field
                                name='name'
                                type='text'
                                placeholder='نام و نام خانوادگی'
                                className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                            />
                            <span className='text-MainRed'>
                                <ErrorMessage name='name' />
                            </span>
                            <Field
                                name='photo'
                                type='text'
                                placeholder='آدرس تصویر'
                                className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                            />
                            <span className='text-MainRed'>
                                <ErrorMessage name='photo' />
                            </span>
                            <Field
                                name='mobile'
                                type='number'
                                placeholder='شماره موبایل'
                                className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                            />
                            <span className='text-MainRed'>
                                <ErrorMessage name='mobile' />
                            </span>
                            <Field
                                name='email'
                                type='text'
                                placeholder='آدرس ایمیل'
                                className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                            />
                            <span className='text-MainRed'>
                                <ErrorMessage name='email' />
                            </span>
                            <Field
                                name='job'
                                type='text'
                                placeholder='شغل'
                                className='placeholder:text-white w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                            />
                            <span className='text-MainRed'>
                                <ErrorMessage name='job' />
                            </span>
                            <Field
                                as='select'
                                name='group'
                                id=''
                                className='w-full rounded-md bg-MainCurrentline border border-MainPurple p-2 text-white'
                            >
                                <option className='text-white'>
                                    انتخاب گروه
                                </option>
                                {groups.map((group) => (
                                    <option
                                        key={group.id}
                                        value={group.id}
                                        className='text-white'
                                    >
                                        {group.name}
                                    </option>
                                ))}
                            </Field>
                            <span className='text-MainRed'>
                                <ErrorMessage name='group' />
                            </span>
                            <div className='flex justify-center'>
                                <button
                                    type='submit'
                                    className='bg-MainPurple p-2 rounded-md ml-5'
                                >
                                    ویرایش مخاطب
                                </button>
                                <button className='bg-MainComment p-2 rounded-md'>
                                    انصراف
                                </button>
                            </div>
                        </Form>
                    </Formik>
                )}
            </div>
        </div>
    );
};

export default EditContact;
