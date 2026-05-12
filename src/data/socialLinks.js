import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tuetranduy/",
    icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    name: "GitHub",
    url: "https://github.com/tuetranduy",
    icon: FaGithub,
    color: "#333",
  },
  {
    name: "Email",
    url: "mailto:tue1996@gmail.com",
    icon: FaEnvelope,
    color: "#EA4335",
  },
];

// Telegram Bot Configuration for Contact Form
// Uses Vercel environment variables (set in Vercel Dashboard > Settings > Environment Variables)
export const telegramConfig = {
  botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "",
  chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID || "",
};
