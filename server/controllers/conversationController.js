import Conversation from "../models/Conversation.js";
import { extractTopics } from "../utils/topicExtractor.js";

export const addConversation = async (req, res) => {
  try {
    const { personId, summary, rawText } = req.body;

    // Automatically extract topics from rawText
    const topics = extractTopics(rawText);

    const conversation = await Conversation.create({
      personId,
      topics,
      summary,
      rawText,
    });
    res.status(201).json(conversation);
  } catch (error) {
    res.status(500).json({ error: "Failed to save conversation" });
  }
};
