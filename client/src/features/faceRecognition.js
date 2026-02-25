import * as faceapi from "face-api.js";

export const getFaceEmbedding = async (videoElement) => {
  const detection = await faceapi
    .detectSingleFace(videoElement)
    .withFaceLandmarks()
    .withFaceDescriptor();
  if (!detection) return null;

  // Return the 128-float descriptor array
  return Array.from(detection.descriptor);
};
