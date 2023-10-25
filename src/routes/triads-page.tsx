import { useState } from "react";
import { Note } from "tonal";
import { Flex, Select, Stack } from "@chakra-ui/react";

import TriadComponent from "../components/triad-component";

import { startingNotes, triads } from "../data";

const TriadsPage = () => {
  const [startingNote, setStartingNote] = useState(Note.get("C4"));

  return (
    <Flex direction="column" maxW="800px" margin="auto">
      <Flex paddingBottom="30px" align="baseline" margin="auto">
      <label htmlFor="startingNote">Válassz alaphangot:</label>
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
      <Stack direction="row" wrap="wrap" gap="20px" justifyContent="center" overflow="auto">
        {triads.map((triad) => {
          return (
            <div key={startingNote.name + triad.en}>
              <TriadComponent startNote={startingNote} quality={triad} isTest={false} />
            </div>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default TriadsPage;
