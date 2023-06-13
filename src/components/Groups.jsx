import React, { useState } from 'react';
import Spinner from './Spinner';
import { ToastContainer, toast } from 'react-toastify';
import {
    useAddNewgroupMutation,
    useDeleteGroupMutation,
    useGetGroupsQuery,
} from '../redux/api/apiSlice';

const Groups = () => {
    const { data: groups, isLoading } = useGetGroupsQuery();
    const [deleteGroup] = useDeleteGroupMutation();
    const [addNewGroup] = useAddNewgroupMutation();
    const [groupInfo, setGroupInfo] = useState('');
    const deleteGroupHandler = async (id) => {
        await deleteGroup(id);
        toast.success('گروه حذف شد');
    };
    const createNewGroup = async (groupName) => {
        await addNewGroup({ name: groupName }).unwrap();
        toast.success('گروه جدید ساخته شد');
    };
    return (
        <div>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
            <input
                type='text'
                className='border-MainOrange p-2 ml-2'
                placeholder='نام گروه'
                onChange={(e) => setGroupInfo(e.target.value)}
            />
            <button
                onClick={() => {
                    createNewGroup(groupInfo);
                }}
                className='bg-MainCyan p-2'
            >
                ایجاد گروه جدید
            </button>
            {isLoading ? (
                <Spinner />
            ) : (
                groups?.length > 0 && (
                    <div className='space-y-2'>
                        {groups.map((group) => (
                            <div key={group.id} className='flex'>
                                <p className='bg-MainPink text-lg w-fit p-2 ml-2'>
                                    {group.name}
                                </p>
                                <button
                                    className='bg-MainCyan p-2'
                                    onClick={() => {
                                        deleteGroupHandler(group.id);
                                    }}
                                >
                                    حذف گروه
                                </button>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default Groups;
