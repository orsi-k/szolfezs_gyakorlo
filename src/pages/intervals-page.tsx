import { Stack } from "@chakra-ui/react";
import { Note } from "tonal";

import IntervalComponent from "../components/interval-component";

const intervals = ["1P", "2m", "2M", "3m", "3M", "4P", "5P", "6m", "6M", "7m", "7M", "8P"];

const IntervalsPage = () => {
  return (
    <Stack direction="row" wrap="wrap">
      {intervals.map((interv) => {
        return (
          <div key={interv}>
            <IntervalComponent startNote={Note.get("C4")} interval={interv} isTest={false} />
          </div>
        );
      })}
    </Stack>
  );
};

export default IntervalsPage;
