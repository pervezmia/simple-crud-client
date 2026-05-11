import { updateUser } from "@/app/lib/actions";
import { getUsersById } from "@/app/lib/data";
import { Button, Input, Label, TextField } from "@heroui/react";

const UserEditPage = async ({ params }) => {
  const { userId } = await params;
  console.log(userId);

  const user = await getUsersById(userId);
  console.log(user);


  const updateUserWrapper = async (formData) => {
    'use server'
    return updateUser(userId, formData);
  }

  return (
    <div>
      <h3>Editing User: {user.name}</h3>
      <div className="w-1/2 mx-auto">
        <form action={updateUserWrapper} className="flex flex-col gap-4">
          <TextField name="name" defaultValue={user?.name} className="w-full">
            <Label>Name</Label>
            <Input  placeholder="Enter your name" />
          </TextField>

          <TextField name="email" type="email" defaultValue={user?.email} className="w-full">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
          </TextField>

          <TextField name="role" defaultValue={user?.role}  className="w-full">
            <Label>Role</Label>
            <Input placeholder="Enter your role" />
          </TextField>

          <div className="flex gap-1.5">
            <Button slot="close" variant="secondary">
              Cancel
            </Button>

            <Button type="submit" slot="close">
              Update user
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEditPage;
