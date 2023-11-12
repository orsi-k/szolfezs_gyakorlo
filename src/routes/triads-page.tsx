import { useState } from "react";
import { Divider, Flex, Heading, Select, Stack } from "@chakra-ui/react";

import TriadComponent from "../components/triad-component";

import { startingNotes, triads } from "../data";
import { TriadType } from "../types";

const TriadsPage = () => {
  const [startingNote, setStartingNote] = useState("C4");

  return (
    <Flex direction="column" maxW="800px" margin="auto">
      <Heading textAlign="center" size="lg" marginBottom="40px">
        Hármashangzatok
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
        {triads.map((triad: TriadType) => {
          return (
            <div key={startingNote + triad.en}>
              <TriadComponent startNote={startingNote} quality={triad} isTest={false} />
            </div>
          );
        })}
      </Stack>
      <Divider m="30px" w="70%" alignSelf="center" border="1px solid grey" borderRadius="2px" />
      <Heading size="md" m="20px">
        Első fordítás - Szext akkord
      </Heading>
      <Stack direction="row" wrap="wrap" gap="20px" justifyContent="center" overflow="auto">
        {triads.map((triad: TriadType) => {
          return (
            <div key={startingNote + triad.en}>
              <TriadComponent startNote={startingNote} quality={triad} isTest={false} />
            </div>
          );
        })}
      </Stack>
      <Divider m="30px" w="70%" alignSelf="center" border="1px solid grey" borderRadius="2px" />
      <Heading size="md" m="20px">
        Második fordítás - Kvartszext akkord
      </Heading>
      <Stack direction="row" wrap="wrap" gap="20px" justifyContent="center" overflow="auto">
        {triads.map((triad: TriadType) => {
          return (
            <div key={startingNote + triad.en}>
              <TriadComponent startNote={startingNote} quality={triad} isTest={false} />
            </div>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default TriadsPage;
