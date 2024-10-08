function CoupletDisplay({ children: couplet }: { children: Couplet }) {
  return (
    <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
      <div
        // onClick={() => playAudio(couplet.num)}
        style={{ marginBottom: "2rem" }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "0.25rem", fontSize: "22px" }}>
            {couplet.p1}
          </div>
          {couplet.p2 && (
            <div style={{ marginBottom: "0.25rem", fontSize: "22px" }}>
              {couplet.p2}
            </div>
          )}
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <div style={{ marginBottom: "0.5rem" }}>{couplet.e1}</div>
          {couplet.e2 && (
            <div style={{ marginBottom: "0.25rem", marginTop: "0.25rem" }}>
              {couplet.e2}
            </div>
          )}
        </div>
      </div>
      {couplet.num !== 69 && (
        <audio controls>
          <source src={`/audio/${couplet.num}.mp3`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default CoupletDisplay;
