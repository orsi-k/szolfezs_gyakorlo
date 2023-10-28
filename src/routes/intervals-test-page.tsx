import { Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Note } from "tonal";

import IntervalComponent from "../components/interval-component";
import { intervals, startingNotes } from "../data";

const IntervalsTestPage = () => {
  const [testInterval, setTestInterval] = useState(intervals[Math.floor(Math.random() * intervals.length)]);
  const [startingNote, setStartingNote] = useState(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]));

  const randomizeInterval = () => {
    setTestInterval(intervals[Math.floor(Math.random() * intervals.length)]);
    setStartingNote(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]));
  };

  return (
    <Flex direction="column" align="center">
      <Heading size="md" m="25px">Hangköz felismerés</Heading>
      <IntervalComponent startNote={startingNote.name} interval={testInterval} isTest={true} />
      <Button w="180px" m="30px" onClick={randomizeInterval}>
        Következő
      </Button>
    </Flex>
  );
};

export default IntervalsTestPage;
