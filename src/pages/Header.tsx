import {
  AppShell,
  Burger,
  Button,
  Group,
  Text,
  Menu,
  Flex,
  UnstyledButton,
  Avatar,
  ActionIcon
} from "@mantine/core";
import { forwardRef } from "react";
import {
  TbWallet,
  TbUser,
  TbSettings,
  TbLockOpen,
  TbLogout,
  TbChevronRight
} from "react-icons/tb";
import cat from "../assets/test.jpg";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "var(--mantine-spacing-md)",
        color: "var(--mantine-color-text)",
        borderRadius: "var(--mantine-radius-sm)",
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>
        </div>

        {icon || <TbChevronRight size={16} />}
      </Group>
    </UnstyledButton>
  )
);

const Header = ({
  mobileOpened,
  toggleMobile,
  desktopOpened,
  toggleDesktop,
}: any) => {
  return (
    <AppShell.Header>
      <Flex
        justify="space-between"
        align="center"
        h="100%"
        px="md"
        style={{ width: "100%" }}
      >
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
        </Group>

        {/* ✅ Add your button here */}
        <Group>
        <Menu withArrow shadow="md">
          <Menu.Target>
            <UserButton image={cat} name="Kucing Jalal" />
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<TbUser size={14} />}>Profile</Menu.Item>
            <Menu.Item leftSection={<TbWallet size={14} />}>
              My Wallet
            </Menu.Item>
            <Menu.Item leftSection={<TbSettings size={14} />}>
              Settings
            </Menu.Item>
            <Menu.Item leftSection={<TbLockOpen size={14} />}>
              Lock Screen
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item leftSection={<TbLogout size={14} />} c={"red"}>Log Out</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <ActionIcon size={"lg"} variant="subtle" c={"white"}><TbSettings size={25}/></ActionIcon>
        </Group>
      </Flex>
    </AppShell.Header>
  );
};

export default Header;
