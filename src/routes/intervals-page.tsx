import { useState } from "react";
import { Note } from "tonal";
import { Select, Stack } from "@chakra-ui/react";

import IntervalComponent from "../components/interval-component";
import { intervals, startingNotes } from "../data";

const IntervalsPage = () => {
  const [startingNote, setStartingNote] = useState(Note.get("C4"));

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Select starting note:
      <Select placeholder="C4" onChange={(e) => setStartingNote(Note.get(e.target.value))}>
        {startingNotes.map((note) => {
          return (
            <option key={note} value={note}>
              {note}
            </option>
          );
        })}
      </Select>
      <Stack direction="row" wrap="wrap">
        {intervals.map((interv) => {
          return (
            <div key={interv}>
              <IntervalComponent startNote={startingNote.name} interval={interv} isTest={false} />
            </div>
          );
        })}
              {/* <IntervalComponent startNote={startingNote.name} interval={"8P"} isTest={false} /> */}
      </Stack>
    </div>
  );
};

export default IntervalsPage;
