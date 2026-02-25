import React, { useEffect, useRef } from "react";
import { getFaceEmbedding } from "../features/faceRecognition";
import axios from "axios";

const CameraView = ({ isModelsLoaded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isModelsLoaded) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error(`Camera Access Denied:`, err));
    }
  }, [isModelsLoaded]);

  const handleCapture = async () => {
    const embedding = await getFaceEmbedding(videoRef.current);
    if (!embedding) {
      alert("No face detected! Try again.");
      return;
    }

    // Now send to your backend!
    try {
      const response = await axios.post(
        "http://localhost:8000/api/people/identify",
        {
          embedding,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      console.log("Match Result:", response.data);
    } catch (err) {
      console.error("Identification failed", err);
    }
  };
  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <button onClick={handleCapture} className="bg-blue-500 text-white p-2">
        Identify Person
      </button>
    </div>
  );
};

export default CameraView;
