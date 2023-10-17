import { Range } from "tonal";

export const intervals = [
  { en: "1P", hun: "prím" },
  { en: "2m", hun: "kis szekund" },
  { en: "2M", hun: "nagy szekund" },
  { en: "3m", hun: "kis terc" },
  { en: "3M", hun: "nagy terc" },
  { en: "4P", hun: "kvart" },
  { en: "5P", hun: "kvint" },
  { en: "6m", hun: "kis szext" },
  { en: "6M", hun: "nagy szext" },
  { en: "7m", hun: "kis szeptim" },
  { en: "7M", hun: "nagy szeptim" },
  { en: "8P", hun: "oktáv" },
];
export const startingNotes = Range.chromatic(["C3", "C5"]);
export const triads = [
  { en: "major", hun: "dúr" },
  { en: "minor", hun: "moll" },
  { en: "diminished", hun: "szűkített" },
  { en: "augmented", hun: "bővített" },
];
