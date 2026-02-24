import React, { useEffect, useRef } from "react";

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
  return (
    <div className="relative">
      <video ref={videoRef} autoPlay muted className="rounded-lg shadow-xl">
        {!isModelsLoaded && <p>Loading AI Models....</p>}
      </video>
    </div>
  );
};

export default CameraView;
