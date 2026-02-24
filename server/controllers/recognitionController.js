import Person from "../models/Person.js";
import { findBestMatch } from "../utils/faceMatcher.js";

export const identifyPerson = async (req, res) => {
  try {
    const { embedding } = req.body;

    // Get all known people for this user
    const allPeople = await Person.find({ userId: req.user.id });

    const match = findBestMatch(embedding, allPeople);

    if (match) {
      res.json({ matchFound: true, name: match.name, personId: match._id });
    } else {
      res.json({ matchFound: false });
    }
  } catch (error) {
    res.status(500).json({ error: "Recognition failed" });
  }
};
