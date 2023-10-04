import { Button } from "@chakra-ui/react";
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
    <>
      <IntervalComponent startNote={startingNote.name} interval={testInterval} isTest={true} />
      <Button onClick={randomizeInterval}>New</Button>
    </>
  );
};

export default IntervalsTestPage;
