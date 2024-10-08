import Select from "react-select";

function SearchBox(props: {
  searchValue: string;
  onSearchValueChange: (s: string) => void;
  themesSelected: string[];
  onThemesSelectedChange: (t: string[]) => void;
  themeOptions: { label: string; value: string }[];
}) {
  return (
    <div style={{ margin: "2rem 0" }}>
      <div
        style={{
          maxWidth: "400px",
          display: "block",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        <Select
          options={props.themeOptions}
          isMulti
          placeholder="Choose topic(s)..."
          onChange={(t) => {
            props.onThemesSelectedChange(t.map((t) => t.value));
          }}
        />
      </div>
      <div
        style={{
          maxWidth: "400px",
          display: "block",
          margin: "1rem auto 0 auto",
          textAlign: "left",
        }}
      >
        <input
          className="Input"
          type="text"
          autoCorrect="off"
          autoComplete="off"
          value={props.searchValue}
          onChange={(e) => props.onSearchValueChange(e.target.value)}
          placeholder="Search in couplets..."
          dir="auto"
        />
      </div>
    </div>
  );
}

export default SearchBox;
