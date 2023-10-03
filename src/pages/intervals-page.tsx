import { useState } from "react";
import { Range, Note } from "tonal";
import { Button, Stack } from "@chakra-ui/react";

import IntervalComponent from "../components/interval-component";

const intervals = ["1P", "2m", "2M", "3m", "3M", "4P", "5P", "6m", "6M", "7m", "7M", "8P"];
const startingNotes = Range.chromatic(["C3", "C5"]);

const IntervalsPage = () => {
  const [isTest, setIsTest] = useState(false);
  const [testInterval, setTestInterval] = useState("");
  const [startingNote, setStartingNote] = useState(Note.get("C4"));

  const testButtonClicked = () => {
    if (isTest) setIsTest(false);
    else {
      randomizeInterval();
      setIsTest(true);
    }
  };

  const randomizeInterval = () => {
    setTestInterval(intervals[Math.floor(Math.random() * intervals.length)]);
    setStartingNote(Note.get(startingNotes[Math.floor(Math.random() * startingNotes.length)]))
  };

  return (
    <>
      <Button onClick={testButtonClicked}>Test</Button>
      {isTest ? (
        <>
          <IntervalComponent startNote={startingNote} interval={testInterval} isTest={true} />
          <Button onClick={randomizeInterval}>New</Button>
        </>
      ) : (
        <Stack direction="row" wrap="wrap">
          {intervals.map((interv) => {
            return (
              <div key={interv}>
                <IntervalComponent startNote={startingNote} interval={interv} isTest={false} />
              </div>
            );
          })}
        </Stack>
      )}
    </>
  );
};

export default IntervalsPage;
