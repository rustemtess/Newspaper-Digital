'use client';

import Newspaper from "../newspaper";

const NewspaperList = () => {

    return (
        <div className='flex flex-col gap-2 max-w-[1200px] w-full p-4'>
            
            <h1 className='text-4xl text-center font-medium py-8 text-black'>1955 г.</h1>

            <Newspaper />
            <hr className='my-4' />
            <Newspaper />
            
        </div>
    );

};

export default NewspaperList;