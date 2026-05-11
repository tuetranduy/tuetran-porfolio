import { Link2, Code2, Send, Mail } from 'lucide-react';

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tuetranduy/",
    icon: Link2,
    color: "#0A66C2"
  },
  {
    name: "GitHub",
    url: "https://github.com/tuetranduy",
    icon: Code2,
    color: "#333"
  },
  {
    name: "Email",
    url: "mailto:tue1996@example.com",
    icon: Mail,
    color: "#EA4335"
  }
];

// Telegram Bot Configuration for Contact Form
// Uses Vercel environment variables (set in Vercel Dashboard > Settings > Environment Variables)
export const telegramConfig = {
  botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "",
  chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID || ""
};
