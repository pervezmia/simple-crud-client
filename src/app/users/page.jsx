import React from "react";
import { getUsers } from "../lib/data";
import UsersTable from "@/components/UsersTable";
import { createUser, deleteUser } from "../lib/actions";
import AddUserModal from "@/components/AddUserModal";

const UsersPage = async () => {
  const users = await getUsers();
  // console.log(users);
  return (
    <div>
      <div>
        <h3 className="text-center">data length: {users.length}</h3>
      </div>
      <div className="w-[80%] mx-auto flex justify-between">
        <h3>This is users management page.</h3>
        <AddUserModal createUserAction = {createUser}></AddUserModal>
      </div>
      <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
    </div>
  );
};

export default UsersPage;
