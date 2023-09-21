import { Note } from "tonal";
// @ts-ignore
import { Notation, Midi } from 'react-abc';

const IntervalComponent = (props: any) => {
    const startNote = props.startNote;
    const endNote = Note.get(Note.transpose(startNote, props.interval))
    
    return (
        <div>
            <h4>{props.interval.name}</h4>
            Starting note: {startNote.letter}<br/>
            Ending note: {endNote.letter}
            <Notation notation={`L: 1\n[${startNote.letter}${endNote.letter}]`} />
            <Midi notation={`L: 1\n[${startNote.letter}${endNote.letter}]`} />
            <Midi notation={`L: 1/2\n${startNote.letter}${endNote.letter}`} />
        </div>
    )
}

export default IntervalComponent
