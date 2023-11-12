import { useState, useEffect } from "react";
import { AbcNotation, Chord } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, Button } from "@chakra-ui/react";

import "../midi.css";
import { TriadProps } from "../types";

const TriadComponent = ({ tonic, quality, inversion = 0, isTest }: TriadProps) => {
  const [showTriad, setShowTriad] = useState(!isTest);
  const notes = Chord.steps([tonic, quality.en]);
  const startNote = notes(0 + inversion);
  const middleNote = notes(1 + inversion);
  const endNote = notes(2 + inversion);
  const abcNotes = [
    AbcNotation.scientificToAbcNotation(startNote),
    AbcNotation.scientificToAbcNotation(middleNote),
    AbcNotation.scientificToAbcNotation(endNote),
  ];

  useEffect(() => {
    setShowTriad(!isTest);
  }, [startNote, quality, isTest]);

  return (
    <div style={{ width: "180px" }}>
      <Card variant="filled" bg="white" border="0px" borderRadius="xl">
        <CardHeader bg="gray.100" borderTopLeftRadius="inherit" borderTopRightRadius="inherit" fontWeight="bold" textAlign="center">
          <p>{showTriad ? `${tonic} ${quality.hun}` : "??"}</p>
          <p>{showTriad && inversion > 0 && inversion + ". fordítás"}</p>
        </CardHeader>
        <CardBody>
          Alaphang: {startNote}
          <br />
          Középső hang: {showTriad && middleNote}
          <br />
          Felső hang: {showTriad && endNote}
          <Notation notation={`L: 1\n[${abcNotes[0]} ${showTriad ? abcNotes[1] : ""} ${showTriad ? abcNotes[2] : ""}]`} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Együtt:
            <Midi key={quality.en} notation={`L: 1\n [ ${abcNotes[0]} ${abcNotes[1]} ${abcNotes[2]} ]`} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px", marginBottom: "10px" }}>
            Külön:
            <Midi key={quality.en} notation={`L: 1/2\n ${abcNotes[0]} ${abcNotes[1]} ${abcNotes[2]} `} />
          </div>
          {isTest && (
            <Button w="100%" onClick={() => setShowTriad(true)}>
              Felfed
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default TriadComponent;
