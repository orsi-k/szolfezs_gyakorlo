import { useState } from "react";
import { Flex, Heading, Select, Stack } from "@chakra-ui/react";

import IntervalComponent from "../components/interval-component";
import { intervals, startingNotes } from "../data";
import { IntervalType } from "../types";

const IntervalsPage = () => {
  const [startingNote, setStartingNote] = useState("C4");

  return (
    <Flex direction="column" maxW="800px" margin="auto">
      <Heading textAlign="center" size="lg" marginBottom="40px">
        Hangközök
      </Heading>
      <Flex paddingBottom="30px" align="baseline" margin="auto">
        <label htmlFor="startingNote">Válassz alaphangot:</label>
        <Select value={startingNote} bg="white" id="startingNote" marginLeft="10px" w="150px" onChange={(e) => setStartingNote(e.target.value)}>
          {startingNotes.map((note) => {
            return (
              <option key={note} value={note}>
                {note}
              </option>
            );
          })}
        </Select>
      </Flex>
      <Stack direction="row" wrap="wrap" gap="20px" justifyContent="center" overflow="auto">
        {intervals.map((interv: IntervalType) => {
          return (
            <div key={interv.en}>
              <IntervalComponent startNote={startingNote} interval={interv} isTest={false} />
            </div>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default IntervalsPage;
