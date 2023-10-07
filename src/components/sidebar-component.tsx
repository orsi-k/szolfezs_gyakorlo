import { Box, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <Box className="sidebar" p="20px" backgroundColor="gray.200" flexShrink={0}>
        <Link to={`/`}>
          <Heading size="md" p="10px">
            Szolfézs gyakorló
          </Heading>
        </Link>
        <nav style={{ marginLeft: "10px" }}>
          <ul>
            <li>
              <Link to={`/intervals`}>Hangközök</Link>
            </li>
            <li>
              <Link to={`/intervals/test`}>Hangközök gyakorlás</Link>
            </li>
          </ul>
        </nav>
      </Box>
      <Outlet />
    </>
  );
};

export default Sidebar;
