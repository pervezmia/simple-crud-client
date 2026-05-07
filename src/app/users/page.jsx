import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/components/UsersTable';

const UsersPage = async () => {
    const users = await getUsers();
    console.log(users);
    return (
        <div>
            <h3>This is users management page.</h3>
            <div>
                <h3>data length: {users.length}</h3>
            </div>
            <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;