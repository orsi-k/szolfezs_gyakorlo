import { useState, useEffect } from "react";
import { Note, AbcNotation } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

import "../midi.css";

const IntervalComponent = (props: any) => {
  const [showInterval, setShowInterval] = useState(!props.isTest);
  const startNote = props.startNote;
  const endNote = Note.get(Note.transpose(startNote, props.interval));

  useEffect(() => {
    setShowInterval(!props.isTest);
  }, [props]);

  return (
    <div style={{ width: "180px" }}>
      <Card>
        <CardHeader>{showInterval ? props.interval : "??"}</CardHeader>
        <CardBody>
          Starting note: {startNote.pc}
          <br />
          Ending note: {showInterval && endNote.pc}
          <Notation notation={`L: 1\n[${AbcNotation.scientificToAbcNotation(startNote)}${showInterval ? AbcNotation.scientificToAbcNotation(endNote.name) : ""}]`} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Together:
            <Midi
              key={startNote.pc + props.interval}
              notation={`L: 1\n[${AbcNotation.scientificToAbcNotation(startNote)}${AbcNotation.scientificToAbcNotation(endNote.name)}]`}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Separate:
            <Midi
              key={startNote.pc + props.interval}
              notation={`L: 1/2\n${AbcNotation.scientificToAbcNotation(startNote)}${AbcNotation.scientificToAbcNotation(endNote.name)}`}
            />
          </div>
          {props.isTest && <Button onClick={() => setShowInterval(true)}>Show</Button>}
        </CardBody>
      </Card>
    </div>
  );
};

export default IntervalComponent;
