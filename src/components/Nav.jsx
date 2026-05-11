import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <div className='w-1/2 mx-auto gap-5 flex mt-2.5'>
            <Link href={'/'} className='bg-gray-400 p-2 rounded-2xl'>Home</Link>
            <Link href={'/users'} className='bg-green-400 p-2 rounded-2xl'>Users</Link>
            
        </div>
    );
};

export default Nav;