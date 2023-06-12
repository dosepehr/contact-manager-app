import React, { useContext } from 'react';
import mainContext from '../context';
import Spinner from './Spinner';

const Groups = () => {
    const { groups } = useContext(mainContext);
    return (
        <div>
            <input type="text" className='border-MainOrange p-2 ml-2' placeholder='نام نویسنده' />
            <button className='bg-MainCyan p-2'>ایجاد نویسنده جدید</button>
            {groups.length > 0 ? (
                <div className='space-y-2'>
                    {groups.map((group) => (
                        <div key={group.id} className='flex'>
                            <p className='bg-MainPink text-lg w-fit p-2 ml-2'>
                                {group.name}
                            </p>
                            <button className='bg-MainCyan p-2'>
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
