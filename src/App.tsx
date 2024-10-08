import "./App.css";
import { couplets } from "./data/couplets";
import CoupletDisplay from "./components/CoupletDisplay";
import { useState } from "react";

import { searchInProverbs } from "./lib/search";
import { groupCouplets } from "./lib/group-couplets";
import SearchBox from "./components/SearchBox";

const groupedCouplets = groupCouplets(couplets);

const themeOptions: { value: string; label: string }[] = groupedCouplets.map(
  (g) => ({
    value: g.theme,
    label: g.theme,
  })
);

function App() {
  // const [searchMode, setSearchMode] = useState<"none" | "theme">("none");
  const [themesSelected, setThemesSelected] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const grouped = themesSelected.length
    ? groupedCouplets.filter((g) => themesSelected.includes(g.theme))
    : groupedCouplets;
  const searched = search
    ? groupCouplets(searchInProverbs(search, couplets))
    : grouped;
  return (
    <div className="App">
      <div style={{ margin: "3.5rem 0" }}>
        <h1>Tuning The Heart</h1>
        <h2>Best-Loved Pashto Poetry of Rahman Baba</h2>
        <h3>By Robert Sampson</h3>
        <div style={{ marginTop: "2rem", marginBottom: "3rem" }}>
          Digital version with couplets and audio
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          For more including long-form poetry see the
          <div style={{ marginTop: "0.5rem" }}>
            <a href="https://www.amazon.com/Tuning-Heart-Best-Loved-Pashto-Poetry/dp/B0CG8BWG1F">
              paperback and hardcover version available on Amazon
            </a>
            .
          </div>
        </div>
      </div>
      <SearchBox
        onSearchValueChange={setSearch}
        onThemesSelectedChange={setThemesSelected}
        searchValue={search}
        themesSelected={themesSelected}
        themeOptions={themeOptions}
      />
      {searched.length === 0 && (
        <div style={{ margin: "3rem 0" }}>None found</div>
      )}
      {searched.map(({ theme, proverbs }) => (
        <div key={theme}>
          <h3>{theme}</h3>
          {proverbs.map((proverb) => (
            <CoupletDisplay key={proverb.p1}>{proverb}</CoupletDisplay>
          ))}
        </div>
      ))}
      <div
        style={{
          fontSize: "0.5rem",
          color: "grey",
          margin: "5rem 0",
          lineHeight: "1.4",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          Copyright © 2024 Sampson, Robert
        </div>
        <div>All Rights Reserved</div>
      </div>
    </div>
  );
}

export default App;
