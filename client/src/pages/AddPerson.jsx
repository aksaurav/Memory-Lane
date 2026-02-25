import { useState, useRef } from "react";
import { getFaceEmbedding } from "../features/faceRecognition";
import axios from "axios";

const AddPerson = () => {
  const [name, setName] = useState("");
  const videoRef = useRef(null);

  // Simple setup to start camera
  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const savePerson = async () => {
    const embedding = await getFaceEmbedding(videoRef.current);
    if (!embedding) return alert("No face found!");

    await axios.post(
      "http://localhost:8000/api/people",
      { name, faceEmbedding: embedding },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } },
    );
    alert("Person saved!");
  };

  return (
    <div className="p-4">
      <input
        className="border p-2"
        placeholder="Person Name"
        onChange={(e) => setName(e.target.value)}
      />
      <video ref={videoRef} autoPlay className="w-64" />
      <button onClick={startCamera}>Start Camera</button>
      <button onClick={savePerson}>Save to Memory Lane</button>
    </div>
  );
};

export default AddPerson;
