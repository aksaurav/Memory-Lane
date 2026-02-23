import Person from "../models/Person.js";

export const addPerson = async (req, res) => {
  try {
    const { name, faceEmbedding } = req.body;

    // Attach userId from the JWT middleware, create later
    const person = await Person.create({
      userId: req.user.id,
      name,
      faceEmbedding,
    });

    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ error: `Failed to save person` });
  }
};

export const getAllPeople = async (req, res) => {
  const people = await Person.find({ userId: req.user.id });
  res.status(people);
};
