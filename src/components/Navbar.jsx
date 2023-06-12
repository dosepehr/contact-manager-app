import { useLocation } from 'react-router-dom';
import SearchInput from './SearchInput';
const Navbar = () => {
    const location = useLocation();
    return (
        <div className='bg-MainBackground flex-col md:flex md:flex-row justify-center text-center p-5 text-xl items-center md:justify-between space-y-3 md:space-y-0 mx-auto sm:px-10 md:px-14 lg:px-56'>
            <p className='text-MainForground mx-auto'>
                وب اپلیکیشن مدیریت{' '}
                <span className='text-MainPurple'>مخاطبین</span>
            </p>
            {location.pathname === '/' && (
                <div className='relative flex mx-auto md:mx-0 sm:w-1/2 w-1/2'>
                    <SearchInput />
                </div>
            )}
        </div>
    );
};

export default Navbar;
