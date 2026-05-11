import { Link2, Code2, Send, Mail } from 'lucide-react';

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: Link2,
    color: "#0A66C2"
  },
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: Code2,
    color: "#333"
  },
  {
    name: "Telegram",
    url: "https://t.me/your-username",
    icon: Send,
    color: "#0088cc"
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
    color: "#EA4335"
  }
];

// Telegram Bot Configuration for Contact Form
// To set up:
// 1. Create a bot with @BotFather on Telegram
// 2. Get your bot token
// 3. Get your chat ID (send a message to the bot, then visit: https://api.telegram.org/bot<TOKEN>/getUpdates)
export const telegramConfig = {
  botToken: "YOUR_BOT_TOKEN_HERE", // Replace with your bot token
  chatId: "YOUR_CHAT_ID_HERE" // Replace with your chat ID
};

// Note: Update the URLs above with your actual social media profiles
