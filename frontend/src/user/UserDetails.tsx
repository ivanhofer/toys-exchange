import {
  Button,
  Group,
  Input,
  Rating,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconChevronRight } from "@tabler/icons";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../session/sessionState";
import { getErrorMessage } from "../shared/APIs/baseFetch";
import { editUserData } from "../shared/APIs/userService";
import { schema } from "./userDetailsValidation";

export const UserDetails = () => {
  const selectedUser = useRecoilValue(userState);
  const [isLoading, setIsLoading] = useState(false);
  const [active] = useOutletContext<string>();

  if (!selectedUser) return null;

  const form = useForm({
    initialValues: {
      name: selectedUser.name,
      email: selectedUser.email,
      phoneNumber: selectedUser.phoneNumber,
      address: selectedUser?.address ?? "",
    },
    validateInputOnBlur: true,
    validate: zodResolver(schema),
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      setIsLoading(true);
      await editUserData({ id: selectedUser.id, ...values });
    } catch (e) {
      const message = getErrorMessage(e);
      showNotification({
        title: "Error",
        message: message ?? "Something went wrong",
        color: "red",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
      showNotification({
        title: "Success",
        message: "User updated successfully",
        color: "green",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Title my={20}>{active}</Title>
      <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: 500 }}>
        <Stack spacing="md">
          <TextInput
            radius="md"
            label="Name"
            value={selectedUser.name}
            {...form.getInputProps("name")}
          />
          <TextInput
            radius="md"
            label="Email"
            value={selectedUser.email}
            {...form.getInputProps("email")}
          />
          <TextInput
            radius="md"
            label="Phone number"
            value={selectedUser.phoneNumber}
            {...form.getInputProps("phoneNumber")}
          />
          <TextInput
            radius="md"
            label="Address"
            value={selectedUser.address}
            {...form.getInputProps("address")}
          />
          {/* TODO: Implement changing password */}
          <Input.Wrapper label="Password">
            <Input
              component="button"
              rightSection={<IconChevronRight stroke={1} />}
              onClick={() => console.log("Change password")}
              radius="md"
            >
              Change your password
            </Input>
          </Input.Wrapper>
          <Group spacing={4} align="center">
            <Text>Your rating: </Text>
            <Text color="dimmed">{selectedUser.rating.value ?? 0}/5</Text>
            <Rating value={1} count={1} fractions={10} readOnly />
            <Text color="dimmed">({selectedUser.rating.count})</Text>
          </Group>
        </Stack>
        {form.isDirty() && (
          <Button
            type="submit"
            mt="lg"
            fullWidth
            radius="md"
            loading={isLoading}
          >
            Edit
          </Button>
        )}
      </form>
    </>
  );
};
