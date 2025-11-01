// The Gemini API call has been removed to simplify the application and remove the need for an API key.
export const generateEventIdeas = async (prompt: string): Promise<string> => {
  console.warn("AI Event Idea generator feature is disabled.");
  return "AI idea generation is currently unavailable. This feature has been disabled.";
};
