import axios from "axios";
import React, { useEffect, useState } from "react";

const InputField = ({ schemas, segmentName }) => {
  const [schema, setSchema] = useState([]);
  const [selectedSchema, setSelectedSchema] = useState("");
  const [error, setError] = useState("");
  const [newSchema, setNewSchema] = useState([]);

  const handleSelectChange = (event) => {
    setSelectedSchema(event.target.value);
  };

  useEffect(() => {
    const data = schemas.schema.map((i) => {
      for (const n in i) {
        return { key: n, index: i[n] };
      }
      return {};
    });
    setSchema(data);
  }, [schemas]);

  function handleSchema() {
    if (schema.length !== 0) {
      const isAlreadyAdded = newSchema.some(
        (item) => item.key === selectedSchema
      );

      if (isAlreadyAdded) {
        setError("This Field Already Exist");
      } else {
        const matchingItem = schema.find((item) => item.key === selectedSchema);

        if (matchingItem) {
          setNewSchema((prevSchema) => [...prevSchema, matchingItem]);
          setSelectedSchema("");
          setError("");
        } else {
          setError("Selected Field Not Found in Schema");
          setSelectedSchema("");
        }
      }
    }
  }

  function handleValues(e) {
    console.log(newSchema);
  }

  useEffect(() => {
    const data = {
      segment_name: { segmentName },
      schema: [newSchema],
    };

    const postData = async () => {
        try {
          const url = 'https://webhook.site/460857f8-a98e-484e-9062-927f3937f4e1';
          const response = await axios.post(url, data);
          console.log('Response:', response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      postData();
  }, [newSchema, segmentName]);

  return (
    <>
      {newSchema.map((i) => {
        return (
          <div key={i.key} className="inputContainer">
            <span className="dot" style={{ backgroundColor: "#00ff00" }}></span>
            <select value="" onChange={handleValues}>
              <option label={i.index} key={i.key} value={i.key}>
                {i.index}
              </option>
            </select>
            <span className="deleteField">&#8722;</span>
          </div>
        );
      })}
      <div className="inputContainer">
        <span className="dot"></span>
        <select value={selectedSchema} onChange={handleSelectChange}>
          <option>Add schema to segment</option>
          {schema.length !== 0 &&
            schema.map((i) => (
              <option key={i.key} value={i.key}>
                {i.index}
              </option>
            ))}
        </select>
        <span className="deleteField">&#8722;</span>
      </div>
      <div style={{ color: "red" }}>{error && error}</div>
      <button className="newSchemabtn" onClick={() => handleSchema()}>
        + Add new schema
      </button>
    </>
  );
};

export default InputField;
