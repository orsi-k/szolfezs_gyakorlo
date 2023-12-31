import { Flex, Heading, Divider, Box, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex direction="column">
      <Flex direction="column" backgroundColor="gray.800" p="20px" flexShrink={0} w="100%" h="" pos="fixed" zIndex="1">
        <Link to={`/`} style={{ alignSelf: "center" }}>
          <Heading size="md" color="gray.100">Szolfézs gyakorló</Heading>
        </Link>
        <Divider m="10px" w="3%" alignSelf="center" />
        <nav>
          <Flex dir="row" wrap="nowrap" justifyContent="center" gap="50px" zIndex="100">
            <Menu>
              <MenuButton as={Button} leftIcon={<img src="/note.png" alt="" />} rightIcon={<img src="/note.png" alt="" />}>
                Menü
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to={`/intervals`}>Hangközök</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/intervals/test`}>Hangköz gyakorlás</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link to={`/triads`}>Hármashangzatok</Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/triads/test`}>Hármashangzat gyakorlás</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </nav>
      </Flex>
      <Box margin="150px 5%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Navbar;
