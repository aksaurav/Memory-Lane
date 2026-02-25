import natural from "natural";

export const extractTopics = (text) => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(text.toLowerCase());

  // Simple list of common words to ignore
  const stopWords = [
    "the",
    "and",
    "to",
    "a",
    "of",
    "in",
    "is",
    "for",
    "that",
    "on",
    "with",
  ];

  // Filter out stop words of common to ignore
  const filtered = tokens.filter(
    (word) => !stopWords.includes(word) && word.length > 3,
  );

  return [...new Set(filtered)];
};
