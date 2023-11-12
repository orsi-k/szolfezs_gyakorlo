import { Button, Card, CardBody, CardHeader, Center, Divider, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Center w="100%" flexDirection="column">
      <Card variant="filled" bg="white" align="center center" maxW="300px">
        <CardHeader>
          <Heading as="h1" size="lg" textAlign="center">
            Hello
          </Heading>
        </CardHeader>
        <CardBody>Ezen az oldalon hangközöket és hármashangzatokat tudsz meghallgatni és gyakorolni.</CardBody>
      </Card>
      <Card m="30px" variant="filled" bg="white" align="center center" maxW="300px">
        <Link to={`/intervals`}>
          <Button variant="filled" w="100%"_hover={{background: "gray.100"}}>
            Hangközök
          </Button>
        </Link>
        <Link to={`/intervals/test`}>
          <Button variant="filled" w="100%" _hover={{background: "gray.100"}}>
            Hangköz gyakorlás
          </Button>
        </Link>
        <Divider></Divider>
        <Link to={`/triads`}>
          <Button variant="filled" w="100%"_hover={{background: "gray.100"}}>
            Hármashangzatok
          </Button>
        </Link>
        <Link to={`/triads/test`}>
          <Button variant="filled" w="100%"_hover={{background: "gray.100"}}>
            Hármashangzat gyakorlás
          </Button>
        </Link>
      </Card>
    </Center>
  );
};

export default Home;
