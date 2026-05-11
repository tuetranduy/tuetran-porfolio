import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { socialLinks, telegramConfig } from '../../data/socialLinks';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async (data) => {
    const { botToken, chatId } = telegramConfig;
    
    const text = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📋 *Subject:* ${data.subject}

💬 *Message:*
${data.message}
    `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    return response.ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      if (!telegramConfig.botToken || !telegramConfig.chatId) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus({
          type: 'success',
          message: 'Message sent successfully! (Demo mode)',
        });
      } else {
        const success = await sendToTelegram(formData);
        if (success) {
          setStatus({
            type: 'success',
            message: 'Message sent successfully! I will get back to you soon.',
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Failed to send message');
        }
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tue1996@example.com',
      link: 'mailto:tue1996@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+84 966 197 678',
      link: 'tel:+84966197678',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Vietnam',
    },
  ];

  const inputClasses = "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors";

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or want to discuss quality assurance? Let's connect!"
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's work together
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you need help with test automation, performance testing, or 
                building a quality-focused development process, I'd love to chat.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-sm">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                );
                return info.link ? (
                  <a key={info.title} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.title}>{content}</div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-3">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-5 p-6 sm:p-8 bg-slate-900/50 border border-slate-800 rounded-xl"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                      : 'bg-red-500/10 text-red-400 border border-red-500/30'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm">{status.message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-slate-900/30 border-t-slate-900 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
