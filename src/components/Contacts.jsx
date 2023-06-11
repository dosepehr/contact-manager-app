import { Contact } from './';

const Contacts = () => {
    return (
        <div className='mx-auto sm:px-10 md:px-14 lg:px-28 bg-MainBackground'>
            <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    );
};

export default Contacts;
