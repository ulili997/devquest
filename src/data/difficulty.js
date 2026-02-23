export const DIFFICULTY_CONFIG = {
  beginner: { label: "Beginner", emoji: "\u{1F331}", xpPerQuestion: 10, perfectBonus: 5, color: "#58CC02", desc: "Recall & recognition" },
  average:  { label: "Average",  emoji: "\u{1F525}", xpPerQuestion: 15, perfectBonus: 8, color: "#FFC800", desc: "Apply & analyze" },
  advanced: { label: "Advanced", emoji: "\u{1F48E}", xpPerQuestion: 20, perfectBonus: 10, color: "#CE82FF", desc: "Design & evaluate" },
};

export const DIFFICULTY_KEYS = Object.keys(DIFFICULTY_CONFIG);
