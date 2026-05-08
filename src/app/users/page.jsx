import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "@/components/UsersTable";
import { deleteUser } from "../lib/actions";
import AddUserModal from "@/components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <div>
        <h3>data length: {users.length}</h3>
      </div>
      <div className="flex justify-between">
        <h3>This is users management page.</h3>
        <AddUserModal></AddUserModal>
      </div>
      <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
    </div>
  );
};

export default UsersPage;
