import { useState, useEffect } from "react";
import { Note, AbcNotation } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, Button } from "@chakra-ui/react";

import "../midi.css";

const IntervalComponent = (props: any) => {
  const [showInterval, setShowInterval] = useState(!props.isTest);
  const startNote = props.startNote;
  const abcStartNote = AbcNotation.scientificToAbcNotation(startNote);
  const endNote = Note.get(Note.transpose(startNote, props.interval.en));
  const abcEndNote = AbcNotation.scientificToAbcNotation(endNote.name);

  useEffect(() => {
    setShowInterval(!props.isTest);
  }, [props]);

  return (
    <div style={{ width: "180px" }}>
      <Card border="1px" borderColor="gray.200">
        <CardHeader fontWeight="bold">{showInterval ? props.interval.hun : "??"}</CardHeader>
        <CardBody>
          Alaphang: {startNote}
          <br />
          Másik hang: {showInterval && endNote.name}
          <Notation notation={`L: 1\n[${abcStartNote} ${showInterval ? abcEndNote : ""}]`} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Együtt:
            <Midi key={startNote + props.interval.en} notation={`L: 1\n [ ${abcStartNote} ${abcEndNote} ]`} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Külön:
            <Midi key={startNote + props.interval.en} notation={`L: 1/2\n ${abcStartNote} ${abcEndNote} `} />
          </div>
          {props.isTest && <Button onClick={() => setShowInterval(true)}>Show</Button>}
        </CardBody>
      </Card>
    </div>
  );
};

export default IntervalComponent;
