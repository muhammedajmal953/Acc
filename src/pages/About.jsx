import { motion } from "framer-motion";
import { Heart, Code, Users, Rocket, Target, Lightbulb } from "lucide-react";
import Card from "../components/Card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Friendship",
      description:
        "We believe in genuine connections and supporting each other through thick and thin.",
      color: "text-pink-400",
    },
    {
      icon: Rocket,
      title: "Growth",
      description:
        "Always learning, always improving. We push ourselves to be better every day.",
      color: "text-cyan-400",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "Thinking outside the box and bringing fresh ideas to everything we do.",
      color: "text-purple-400",
    },
    {
      icon: Users,
      title: "Loyalty",
      description:
        "We've got each other's backs, no matter what. Through thick and thin, we stick together.",
      color: "text-purple-400",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "How We Met",
      description:
        "It all started with a random encounter. We clicked instantly and knew we found our people.",
    },
    {
      year: "2021",
      title: "First Adventures",
      description:
        "Late night hangouts, spontaneous road trips, and creating memories that would last forever.",
    },
    {
      year: "2022",
      title: "Getting Closer",
      description:
        "Through ups and downs, we became more than friends - we became family. Supporting each other through everything.",
    },
    {
      year: "2023",
      title: "Making Memories",
      description:
        "Epic moments, inside jokes, and building traditions that define who we are as a crew.",
    },
    {
      year: "2024",
      title: "Still Going Strong",
      description:
        "The journey continues. More adventures, more laughs, more memories. This is just the beginning!",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Story</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ACC isn't just a group - it's our crew. We met, clicked, and decided
            to ride through life together. From random hangouts to deep
            conversations, we've built something real. This is our story, our
            vibe, our gang.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:pr-8 ml-16 md:ml-0"
                        : "md:pl-8 ml-16 md:ml-auto"
                    }`}
                  >
                    <Card hover glow>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl font-bold text-gradient">
                          {item.year}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-400">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            <span className="text-gradient">Our Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card hover glow className="text-center h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-block mb-4"
                    >
                      <Icon className={`w-12 h-12 ${value.color} mx-auto`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
