

import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin, Instagram, Code2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socials = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/ADHEERA12', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/prakalya2006/', color: 'hover:text-blue-400' },
    { name: 'Codolio', icon: Code2, url: 'https://codolio.com/profile/aheera', color: 'hover:text-yellow-400' }];
   

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="neon-text">Get In Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a question or want to collaborate? Feel free to reach out. I'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/15 transition-all duration-300"
                  placeholder="Your Name" />

              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/15 transition-all duration-300"
                  placeholder="prakalyas12@email.com" />

              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 focus:bg-purple-500/15 transition-all duration-300 resize-none"
                  placeholder="Your message here...">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group">

                <Send size={18} />
                <span>Send Message</span>
              </button>

              {submitted &&
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-400/50 text-green-300 text-center">
                  Thanks for your message! I'll get back to you soon.
                </div>
              }
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Email Card */}
            <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300 hover:border-purple-500/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-300 mb-2">your.email@example.com</p>
              <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
            </div>

            {/* Social Links */}
            <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center gap-3 p-4 rounded-lg border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 group">

                      <Icon className={`w-6 h-6 text-gray-400 ${social.color} transition-colors`} />
                      <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </a>);

                })}
              </div>
            </div>

            {/* Codolio Profile */}
            <div className="glassmorphism glow-border rounded-xl p-8 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">My Coding Profile</h3>
              <p className="text-gray-400 text-sm mb-4">
                View my Codolio profile to see my coding activity and statistics.
              </p>
              <a
                href="https://codolio.com/profile/aheera"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all duration-300">

                View Codolio Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
