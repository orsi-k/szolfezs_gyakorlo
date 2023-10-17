import { Flex, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(window.innerWidth > 780 ? true : false);

  return (
    <>
      {show ? (
        <Flex direction="column" className="sidebar" p="20px" backgroundColor="gray.200" flexShrink={0}>
          <Button variant="outline" w="30%" alignSelf="right" onClick={() => setShow(false)}>
            x
          </Button>
          <Link to={`/`}>
            <Heading size="md" p="10px" marginBottom="30px">
              Szolfézs gyakorló
            </Heading>
          </Link>
          <nav style={{ marginLeft: "10px" }}>
            <ul style={{ listStyleImage: "url('note.png')", listStyleType: "disc", lineHeight: "30px" }}>
              <li>
                <Link to={`/intervals`}>Hangközök</Link>
              </li>
              <li>
                <Link to={`/intervals/test`}>Hangköz gyakorlás</Link>
              </li>
              <li>
                <Link to={`/triads`}>Hármashangzatok</Link>
              </li>
              <li>
                <Link to={`/triads/test`}>Hármashangzat gyakorlás</Link>
              </li>
            </ul>
          </nav>
        </Flex>
      ) : (
        <Button onClick={() => setShow(true)}>☰</Button>
      )}
      <Outlet />
    </>
  );
};

export default Sidebar;
