import { Note, AbcNotation } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import "../midi.css";

const IntervalComponent = (props: any) => {
  const startNote = props.startNote;
  const endNote = Note.get(Note.transpose(startNote, props.interval));

  return (
    <div style={{ width: "180px" }}>
      <Card>
        <CardHeader>{props.interval}</CardHeader>
        <CardBody>
          Starting note: {startNote.pc}
          <br />
          Ending note: {endNote.pc}
          <Notation notation={`L: 1\n[${AbcNotation.scientificToAbcNotation(startNote)}${AbcNotation.scientificToAbcNotation(endNote.name)}]`} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Together:
            <Midi notation={`L: 1\n[${AbcNotation.scientificToAbcNotation(startNote)}${AbcNotation.scientificToAbcNotation(endNote.name)}]`} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Separate:
            <Midi notation={`L: 1/2\n${AbcNotation.scientificToAbcNotation(startNote)}${AbcNotation.scientificToAbcNotation(endNote.name)}`} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default IntervalComponent;
