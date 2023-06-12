import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = () => {
    return (
        <>
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
        </>
    );
};

export default SearchInput;
