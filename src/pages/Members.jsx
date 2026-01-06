import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Instagram, Twitter, Linkedin, ExternalLink } from "lucide-react";
import Card from "../components/Card";
import { members } from "../data/members";

const Members = () => {
  const navigate = useNavigate();

  const socialIcons = {
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
    snapchat: ExternalLink,
    tiktok: ExternalLink,
    portfolio: ExternalLink,
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Meet the Gang</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The squad that makes ACC legendary. Each one of us brings something
            special to the group - our personalities, our energy, our vibe.
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                hover
                glow
                tilt
                onClick={() => navigate(`/members/${member.id}`)}
                className="cursor-pointer h-full flex flex-col"
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-500/50"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </div>

                {/* Member Info */}
                <div className="text-center mb-4 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-semibold mb-2">
                    {member.nickname}
                  </p>
                  <p className="text-slate-400 text-sm">{member.role}</p>
                </div>

                {/* Social Links - Hidden by default, shown on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex justify-center space-x-4 mt-4"
                >
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon) return null;
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-slate-400 hover:text-purple-400 transition-colors"
                        aria-label={platform}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  className="mt-4 text-center text-xs text-slate-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Click to learn more →
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
