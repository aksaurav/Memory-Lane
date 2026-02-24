// A simple dot product for normalized vectors
export const findBestMatch = (targetEmbedding, storedPeople) => {
  let bestMatch = null;
  let highestSimilarity = 0;
  const THRESHOLD = 0.6; // Minimum similarity required

  storedPeople.forEach((person) => {
    // Calculate dot product (cosine similarity for normalized vectors)
    let similarity = 0;
    for (let i = 0; i < targetEmbedding.length; i++) {
      similarity += targetEmbedding[i] * person.faceEmbedding[i];
    }

    if (similarity > highestSimilarity && similarity > THRESHOLD) {
      highestSimilarity = similarity;
      bestMatch = person;
    }
  });

  return bestMatch;
};
