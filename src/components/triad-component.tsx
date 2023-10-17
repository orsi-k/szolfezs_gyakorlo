import { useState, useEffect } from "react";
import { Note, AbcNotation, ChordType, Chord } from "tonal";
// @ts-ignore
import { Notation, Midi } from "react-abc";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";

import "../midi.css";

const TriadComponent = (props: any) => {
  const [showTriad, setShowTriad] = useState(!props.isTest);
  const startNote = props.startNote;
  const intervals = Chord.getChord(props.quality.en, startNote.name).intervals;
  const middleNote = Note.get(Note.transpose(startNote, intervals[1])).name;
  const endNote = Note.get(Note.transpose(startNote, intervals[2])).name;

  useEffect(() => {
    setShowTriad(!props.isTest);
  }, [props]);

  return (
    <div style={{ width: "180px" }}>
      <Card border="1px" borderColor="gray.200">
        <CardHeader>{showTriad ? `${startNote.name} ${props.quality.hun}` : "??"}</CardHeader>
        <CardBody>
          Starting note: {startNote.name}
          <br />
          Middle note: {showTriad && middleNote}
          <br />
          Ending note: {showTriad && endNote}
          <Notation
            notation={`L: 1\n[${AbcNotation.scientificToAbcNotation(startNote)} ${showTriad ? AbcNotation.scientificToAbcNotation(middleNote) : ""} ${showTriad ? AbcNotation.scientificToAbcNotation(endNote) : ""}]`}
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Together:
            <Midi
              key={props.quality.en}
              notation={`L: 1\n [ ${AbcNotation.scientificToAbcNotation(startNote)} ${AbcNotation.scientificToAbcNotation(middleNote)} ${AbcNotation.scientificToAbcNotation(endNote)} ]`}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
            Separate:
            <Midi
              key={props.quality.en}
              notation={`L: 1/2\n ${AbcNotation.scientificToAbcNotation(startNote)} ${AbcNotation.scientificToAbcNotation(middleNote)} ${AbcNotation.scientificToAbcNotation(endNote)} `}
            />
          </div>
          {props.isTest && <Button onClick={() => setShowTriad(true)}>Show</Button>}
        </CardBody>
      </Card>
    </div>
  );
};

export default TriadComponent;
