import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
const Contact = () => {
    return (
        <div>
            <div className='bg-MainCurrentline p-5 rounded-lg'>
                <div className='flex flex-col xl:flex-row space-y-5 justify-between items-center'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyEKIq_a7eWEwVEoo1aTBQ6gV1KQ4BI8ojEQgnl0ITQ&s'
                        alt=''
                        className='border border-MainPurple rounded-lg'
                    />
                    <div className='flex w-full justify-center '>
                        <div className='flex flex-col rounded-lg border border-MainBackground w-full max-w-[300px]'>
                            <div className='bg-MainForground flex flex-col text-center h-full rounded-lg divide-y divide-MainComment justify-evenly'>
                                <div className='flex mx-auto w-full justify-center'>
                                    <p className='ml-2'>نام و نام خانوادگی:</p>
                                    <p>سپهر</p>
                                </div>
                                <div className='flex mx-auto w-full justify-center'>
                                    <p className='ml-2'>شماره موبایل:</p>
                                    <p>سپهر</p>
                                </div>
                                <div className='flex mx-auto w-full justify-center'>
                                    <p className='ml-2'>آدرس ایمیل:</p>
                                    <p>سپهر</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2 mr-2'>
                            <button className='bg-MainOrange p-3 rounded-md'>
                                <AiOutlineEye />
                            </button>
                            <button className='bg-MainCyan p-3 rounded-md'>
                                <BiEditAlt />
                            </button>
                            <button className='bg-MainRed p-3 rounded-md'>
                                <BsTrash />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
