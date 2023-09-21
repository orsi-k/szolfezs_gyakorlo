import IntervalComponent from "../components/interval-component";
import { Interval, Note } from "tonal";

const IntervalsPage = () => {
  return (
    <>
      <IntervalComponent startNote={Note.get("C4")} interval={Interval.get("5P")} />
      <IntervalComponent startNote={Note.get("D4")} interval={Interval.get("5P")} />
    </>
  );
};

export default IntervalsPage;
