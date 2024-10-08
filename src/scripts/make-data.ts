import { parse } from "csv-parse/sync";
import * as fs from "fs";

const contents = fs.readFileSync("../data/couplets.csv", "utf-8");
const couplets: Couplet[] = parse(contents).map((row: any) => {
  const num = parseInt(row[0]);
  const [e1, e2] = row[2].split("\n").map((x: string) => x.trim());
  const [p1, p2] = row[1].split("\n").map((x: string) => x.trim());
  const theme = row[3];
  return {
    num,
    p1,
    p2,
    e1,
    e2,
    theme,
  };
});
const tsFile = `export const couplets: Couplet[] = ${JSON.stringify(
  couplets
)};`;
fs.writeFileSync("../data/couplets.ts", tsFile);
