import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "tonal";

import TriadComponent from "../components/triad-component";

import { startingNotes, triads } from "../data";

const TriadsTestPage = () => {
  const [testTriad, setTestTriad] = useState(triads[Math.floor(Math.random() * triads.length)]);
  const [startingNote, setStartingNote] = useState(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]));

  const randomizeInterval = () => {
    setTestTriad(triads[Math.floor(Math.random() * triads.length)]);
    setStartingNote(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]));
  };

  return (
    <Box m="40px">
      <Text m="10px">Listen, guess, click on show, new</Text>
      <TriadComponent startNote={startingNote} quality={testTriad} isTest={true} />
      <Button m="30px" onClick={randomizeInterval}>New</Button>
    </Box>
  );
};

export default TriadsTestPage;
