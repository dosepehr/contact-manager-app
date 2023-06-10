import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div>
            <div className='bg-MainBackground flex-col md:flex md:flex-row justify-center text-center p-5 text-xl items-center md:justify-between space-y-3 md:space-y-0'>
                <p className='text-MainForground'>
                    وب اپلیکیشن مدیریت{' '}
                    <span className='text-MainPurple'>مخاطبین</span>
                </p>
                <div className='relative flex mx-auto md:mx-0 sm:w-1/3 w-1/2'>
                    <input
                        type='text'
                        name=''
                        id=''
                        className='bg-MainCurrentline placeholder:text-white placeholder:text-base p-2 border border-MainPurple rounded-lg w-full'
                        placeholder='جستجوی مخاطبین'
                    />
                    <button className='bg-MainPurple text-MainBackground border border-MainPurple h-full absolute left-0 rounded-l-lg px-2'>
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
