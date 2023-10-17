import { useState } from "react";
import { Note } from "tonal";
import { Flex, Select, Stack } from "@chakra-ui/react";

import IntervalComponent from "../components/interval-component";
import { intervals, startingNotes } from "../data";

const IntervalsPage = () => {
  const [startingNote, setStartingNote] = useState(Note.get("C4"));

  return (
    <Flex direction="column" m="40px">
      <Flex paddingBottom="30px" align="baseline" marginLeft="30px">
        <label htmlFor="startingNote">Select starting note:</label>
        <Select id="startingNote" marginLeft="10px" w="150px" onChange={(e) => setStartingNote(Note.get(e.target.value))}>
          <option key={"C4"} value={"C4"}>
            C4
          </option>
          {startingNotes.map((note) => {
            return (
              <option key={note} value={note}>
                {note}
              </option>
            );
          })}
        </Select>
      </Flex>
      <Stack direction="row" wrap="wrap" overflow="auto" gap="20px">
        {intervals.map((interv) => {
          return (
            <div key={interv.en}>
              <IntervalComponent startNote={startingNote.name} interval={interv} isTest={false} />
            </div>
          );
        })}
        {/* <IntervalComponent startNote={startingNote.name} interval={"8P"} isTest={false} /> */}
      </Stack>
    </Flex>
  );
};

export default IntervalsPage;
