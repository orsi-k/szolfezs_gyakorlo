import { Heading } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div style={{ display: "flex" }}>
      <div id="sidebar" style={{ width: "300px", height: "100%" }}>
        <Link to={`/`}>
          <Heading size='md'>Szolfézs gyakorló</Heading>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to={`/intervals`}>Hangközök</Link>
            </li>
            <li>
              <Link to={`/intervals/test`}>Hangközök gyakorlás</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
