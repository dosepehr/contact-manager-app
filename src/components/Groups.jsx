import React, { useContext, useState } from 'react';
import mainContext from '../context';
import Spinner from './Spinner';
import { deleteGroup, postGroup } from '../services/groupsServices';
import { ToastContainer, toast } from 'react-toastify';

const Groups = () => {
    const { groups } = useContext(mainContext);
    const [groupInfo, setGroupInfo] = useState('');
    const deleteGroupHandler = async (id) => {
        const { status } = await deleteGroup(id);
        if (status === 200) {
            toast.success('گروه حذف شد');
        }
    };
    const createNewGroup = async (groupName) => {
        const { status } = await postGroup({ name: groupName });
        if (status === 201) {
            toast.success('گروه جدید ساخته شد');
        }
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
                placeholder='نام نویسنده'
                onChange={(e) => setGroupInfo(e.target.value)}
            />
            <button
                onClick={() => {
                    createNewGroup(groupInfo);
                }}
                className='bg-MainCyan p-2'
            >
                ایجاد نویسنده جدید
            </button>
            {groups.length > 0 ? (
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
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Groups;
