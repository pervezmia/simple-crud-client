import { getUsersById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage = async ({params}) => {
    const {userId} = await params
    console.log(userId);
    const user = await getUsersById(userId);
    console.log(user);
    return (
        <div>
            <h3>this is user details page. and user name is {user.name}</h3>
        </div>
    );
};

export default UserDetailsPage;