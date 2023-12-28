import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Popup from "./components/popup";

function App() {
  const [saveSegement, setSaveSegment] = useState(false);

  function handleSaveSegment() {
    setSaveSegment(!saveSegement);
  }

  return (
    <div className="app">
      <Navbar icon="<" title="View Audience" />
      <div className="screen">
        <button className="saveButton" onClick={() => handleSaveSegment()}>
          Save Segment
        </button>
        {saveSegement === true ? <Popup saveSegement={saveSegement} /> : ""}
      </div>
    </div>
  );
}

export default App;
