import { Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "tonal";

import TriadComponent from "../components/triad-component";

import { startingNotes, triads } from "../data";

const TriadsTestPage = () => {
  const [testTriad, setTestTriad] = useState(triads[Math.floor(Math.random() * triads.length)]);
  const [startingNote, setStartingNote] = useState(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]));

  const randomizeTriad = () => {
    setTestTriad(triads[Math.floor(Math.random() * triads.length)]);
    setStartingNote(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]));
  };

  return (
    <Flex direction="column" align="center">
      <Heading size="md" m="25px">Hármashangzat felismerés</Heading>
      <TriadComponent startNote={startingNote.name} quality={testTriad} isTest={true} />
      <Button w="180px" m="30px" onClick={randomizeTriad}>
        Következő
      </Button>
    </Flex>
  );
};

export default TriadsTestPage;
