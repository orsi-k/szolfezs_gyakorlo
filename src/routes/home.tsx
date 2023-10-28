import { Button, Card, CardBody, CardHeader, Center, Divider, Flex, Heading } from "@chakra-ui/react";
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
        <Button variant="filled">
          <Link to={`/intervals`}>Hangközök</Link>
        </Button>
        <Button variant="filled">
          <Link to={`/intervals/test`}>Hangköz gyakorlás</Link>
        </Button>
        <Divider></Divider>
        <Button variant="filled">
          <Link to={`/triads`}>Hármashangzatok</Link>
        </Button>
        <Button variant="filled">
          <Link to={`/triads/test`}>Hármashangzat gyakorlás</Link>
        </Button>
      </Card>
    </Center>
  );
};

export default Home;
