import { createUser } from "@/app/lib/actions";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const AddUserModal = ({ createUserAction }) => {
  return (
    <Modal>
      <Button variant="secondary">+ Add user</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Add user</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createUserAction} className="flex flex-col gap-4">
                  <TextField className="w-full">
                    <Label>Name</Label>
                    <Input name="name" placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Role</Label>
                    <Input name="role" placeholder="Enter your role" />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" slot="close">
                      Add user
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddUserModal;
