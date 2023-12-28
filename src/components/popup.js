import React, { useState } from "react";
import Navbar from "./navbar";
import InputField from "./inputField";

function Popup() {
  const [schemas] = useState({
    schema: [
      { first_name: "First Name" },
      { last_name: "Last Name" },
      { gender: "Gender" },
      { age: "Age" },
      { account_name: "Account Name" },
      { city: "City" },
      { state: "State" },
    ],
  });
  const [segmentName, setSegmentName] = useState("");

  function handleSegmentName(e) {
    setSegmentName(e.target.value);
  }

  return (
    <div className="popup">
      <div className="content">
        <Navbar icon="<" title="Saving Segment" />
        <div className="contentcontainer">
          <p>Enter the Name of the Segment</p>
          <input
            className="inputBox"
            type="text"
            name="nameSegment"
            placeholder="Name of the segment"
            onChange={handleSegmentName}
          />
          <p>
            To Save your segment, you need to add the schemas to build the query
          </p>
          <div className="traitsContainer">
            <span className="dot" style={{ backgroundColor: "#00ff00" }}></span>
            <span style={{ marginRight: "10px" }}>User Traits</span>
            <span className="dot" style={{ backgroundColor: "#fe4545" }}></span>
            <span style={{ marginRight: "10px" }}>Group Traits</span>
          </div>
        </div>
        <InputField schemas={schemas} segmentName={segmentName} />
      </div>
    </div>
  );
}

export default Popup;
