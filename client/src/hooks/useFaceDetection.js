import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

export const useFaceDetection = () => {
  const [isModelsLoaded, setIsModelsLoaded] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // Matches your public/models folder

      // Load only the necessary models to save RAM on your 8GB machine
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
      ]);

      setIsModelsLoaded(true);
      console.log("AI Models Loaded!");
    };

    loadModels();
  }, []);

  return { isModelsLoaded };
};
