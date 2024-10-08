type Couplet = {
  p1: string;
  p2: string;
  e1: string;
  e2: string;
  theme: string;
  num: number;
};

type CoupletGroup = {
  theme: string;
  proverbs: Couplet[];
};
