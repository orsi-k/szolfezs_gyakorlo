export type IntervalType = {
  en: string;
  hun: string;
};

export type IntervalProps = {
  startNote: string;
  interval: IntervalType;
  isTest: boolean;
};

export type TriadType = {
    en: string;
    hun: string;
  };
  
  export type TriadProps = {
    tonic: string;
    quality: TriadType;
    inversion?: number;
    isTest: boolean;
  };
  