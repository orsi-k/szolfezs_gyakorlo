import { Card, CardBody, CardHeader, Center, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Center w="100%">
      <Card align="center center" maxW="300px">
        <CardHeader>  <Heading as='h1' size='lg'>Hello</Heading></CardHeader>
        <CardBody>Ezen az oldalon hangközöket és hármashangzatokat tudsz meghallgatni és gyakorolni.</CardBody>
      </Card>
    </Center>
  );
};

export default Home;
