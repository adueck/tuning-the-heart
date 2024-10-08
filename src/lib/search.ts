import { standardizePashto } from "./standardize-pashto";

export function searchInProverbs(
  search: string,
  proverbs: Couplet[]
): Couplet[] {
  if (search.length < 3) return proverbs;
  const s = standardizePashto(search);
  return proverbs.filter(
    (p) =>
      p.e1.includes(s) ||
      p.e2.includes(s) ||
      p.p1.includes(s) ||
      p.p2.includes(s) ||
      p.theme.includes(s)
  );
}
