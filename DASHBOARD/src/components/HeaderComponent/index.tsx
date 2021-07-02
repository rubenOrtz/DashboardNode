import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuIcon,
  MenuDivider,
} from "@chakra-ui/react";
import { Stack, Image } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
type C = { user: any };

export function HeaderComponent({ user }: C) {
  const [loggedOut, setLoggedOut] = React.useState(false);
  const login = () => {
    window.location.href = "http://176.9.111.217:3092/api/auth/discord";
  };
  const dashboardLink = () => {
    window.location.href = "http://176.9.111.217:3000/menu";
  };
  const logout = () => {
    axios.get("http://176.9.111.217:3092/api/auth/logout", {
      withCredentials: true,
    });
    localStorage.clear();
    setLoggedOut(true);
  };
  if (user) {
    console.log(user);
    if (user.getUser) {
      if (!loggedOut) {
        const avatar =
          "https://cdn.discordapp.com/avatars/" +
          user.getUser.discordId +
          "/" +
          user.getUser.avatar +
          ".png";
        return (
          <div>
            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _expanded={{ bg: "white" }}
                _focus={{ boxShadow: "outline" }}>
                <Stack direction='row' isinline='true'>
                  <Image
                    borderRadius='full'
                    boxSize='26px'
                    objectFit='cover'
                    src={avatar}
                  />
                  <h1>{user.getUser.discordTag}</h1>
                </Stack>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Button onClick={dashboardLink}>Go to Dashboard</Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    onClick={logout}
                    background='white'
                    colorScheme='gray'
                    textColor='red'>
                    Log out
                  </Button>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        );
      }
    }
    if (!user.getUser || loggedOut) {
      return (
        <Button onClick={login} variantcolor='orange'>
          Login
        </Button>
      );
    }
  }
  return <h1>loading</h1>;
}
