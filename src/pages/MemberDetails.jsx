import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Instagram,
  Twitter,
  Linkedin,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Card from "../components/Card";
import { members } from "../data/members";

const MemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Member Not Found
          </h1>
          <button
            onClick={() => navigate("/members")}
            className="text-purple-400 hover:text-purple-300"
          >
            Back to Gang
          </button>
        </div>
      </div>
    );
  }

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
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate("/members")}
          className="flex items-center space-x-2 text-slate-400 hover:text-white mb-8 group"
        >
          <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
            <ArrowLeft size={20} />
          </motion.div>
          <span>Back to Gang</span>
        </motion.button>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card glow className="mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-8 h-8 text-purple-400" />
                </motion.div>
              </motion.div>

              {/* Member Info */}
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-gradient">{member.name}</span>
                </h1>
                <p className="text-2xl text-purple-400 font-semibold mb-2">
                  {member.nickname}
                </p>
                <p className="text-xl text-slate-300 mb-6">{member.role}</p>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon) return null;
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass p-3 rounded-lg text-slate-400 hover:text-purple-400 transition-colors"
                        aria-label={platform}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <p className="text-slate-300 leading-relaxed">{member.bio}</p>
            </Card>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Card>
              <h2 className="text-2xl font-bold text-white mb-4">
                What I Bring
              </h2>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <h2 className="text-2xl font-bold text-white mb-4">Fun Facts</h2>
              <ul className="space-y-3">
                {member.funFacts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3 text-slate-300"
                  >
                    <span className="text-purple-400 mt-1">✨</span>
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MemberDetails;
