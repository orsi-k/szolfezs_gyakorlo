import { useState, useEffect } from "react";
import { Note, AbcNotation, Chord } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, Button } from "@chakra-ui/react";

import "../midi.css";

const TriadComponent = (props: any) => {
  const [showTriad, setShowTriad] = useState(!props.isTest);
  const startNote = props.startNote;
  const intervals = Chord.getChord(props.quality.en, startNote.name).intervals;
  const middleNote = Note.get(Note.transpose(startNote, intervals[1])).name;
  const endNote = Note.get(Note.transpose(startNote, intervals[2])).name;
  const abcNotes = [
    AbcNotation.scientificToAbcNotation(startNote),
    AbcNotation.scientificToAbcNotation(middleNote),
    AbcNotation.scientificToAbcNotation(endNote),
  ];

  useEffect(() => {
    setShowTriad(!props.isTest);
  }, [props]);

  return (
    <div style={{ width: "180px" }}>
      <Card border="1px" borderColor="gray.200">
        <CardHeader fontWeight="bold">{showTriad ? `${startNote.name} ${props.quality.hun}` : "??"}</CardHeader>
        <CardBody>
          Alaphang: {startNote.name}
          <br />
          Középső hang: {showTriad && middleNote}
          <br />
          Felső hang: {showTriad && endNote}
          <Notation notation={`L: 1\n[${abcNotes[0]} ${showTriad ? abcNotes[1] : ""} ${showTriad ? abcNotes[2] : ""}]`} />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Együtt:
            <Midi key={props.quality.en} notation={`L: 1\n [ ${abcNotes[0]} ${abcNotes[1]} ${abcNotes[2]} ]`} />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Külön:
            <Midi key={props.quality.en} notation={`L: 1/2\n ${abcNotes[0]} ${abcNotes[1]} ${abcNotes[2]} `} />
          </div>
          {props.isTest && <Button onClick={() => setShowTriad(true)}>Show</Button>}
        </CardBody>
      </Card>
    </div>
  );
};

export default TriadComponent;
