import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
const Contact = ({ name, mobile, email, photo }) => {
    return (
        <div>
            <div className='bg-MainCurrentline p-5 rounded-lg'>
                <div className='flex flex-col xl:flex-row space-y-5 justify-between items-center'>
                    <img
                        src={photo || `default.png`}
                        alt=''
                        className='border border-MainPurple rounded-lg max-w-[150px]'
                    />
                    <div className='flex w-full justify-center '>
                        <div className='flex flex-col rounded-lg border border-MainPurple w-full max-w-[300px]'>
                            <div className='bg-MainForground flex flex-col text-center h-full rounded-lg divide-y divide-MainPurple justify-evenly'>
                                <div className='flex mx-auto w-full justify-center'>
                                    <p className='ml-2'>نام و نام خانوادگی:</p>
                                    <p>{name}</p>
                                </div>
                                <div className='flex mx-auto w-full justify-center'>
                                    <p className='ml-2'>شماره موبایل:</p>
                                    <p>{mobile}</p>
                                </div>
                                <div className='flex mx-auto w-full justify-center'>
                                    <p className='ml-2'>آدرس ایمیل:</p>
                                    <p>{email}</p>
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
