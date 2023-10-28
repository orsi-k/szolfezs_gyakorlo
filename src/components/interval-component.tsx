import { useState, useEffect } from "react";
import { Note, AbcNotation } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, Button } from "@chakra-ui/react";

import { IntervalProps } from "../types";

import "../midi.css";

const IntervalComponent = ({ startNote, isTest, interval }: IntervalProps) => {
  const [showInterval, setShowInterval] = useState(!isTest);
  const abcStartNote = AbcNotation.scientificToAbcNotation(startNote);
  const endNote = Note.get(Note.transpose(startNote, interval.en));
  const abcEndNote = AbcNotation.scientificToAbcNotation(endNote.name);

  useEffect(() => {
    setShowInterval(!isTest);
  }, [startNote, interval, isTest]);

  return (
    <div style={{ width: "180px" }}>
      <Card variant="filled" bg="white" border="0px" borderRadius="xl">
        <CardHeader bg="gray.100" borderTopLeftRadius="inherit" borderTopRightRadius="inherit" fontWeight="bold" textAlign="center">
          {showInterval ? interval.hun : "??"}
        </CardHeader>
        <CardBody>
          Alaphang: {startNote}
          <br />
          Másik hang: {showInterval && endNote.name}
          <Notation notation={`L: 1\n[${abcStartNote} ${showInterval ? abcEndNote : ""}]`} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Együtt:
            <Midi key={startNote + interval.en} notation={`L: 1\n [ ${abcStartNote} ${abcEndNote} ]`} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px", marginBottom: "10px" }}>
            Külön:
            <Midi key={startNote + interval.en} notation={`L: 1/2\n ${abcStartNote} ${abcEndNote} `} />
          </div>
          {isTest && (
            <Button w="100%" onClick={() => setShowInterval(true)}>
              Felfed
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default IntervalComponent;
