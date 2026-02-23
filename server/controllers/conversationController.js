import Conversation from "../models/Conversation.js";

export const addConversation = async (req, res) => {
  try {
    const { personId, topics, summary, rawText } = req.body;

    const conversation = await Conversation.create({
      personId,
      topics,
      summary,
      rawText,
    });

    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({ error: `Failed to save conversation` });
  }
};
