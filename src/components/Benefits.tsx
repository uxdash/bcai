import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Heart, Compass } from 'lucide-react';

const benefits = [
  { icon: Star, text: "Gain deep self-understanding" },
  { icon: Zap, text: "Make informed decisions aligned with your cosmic energy" },
  { icon: Heart, text: "Improve relationships through astrological insights" },
  { icon: Compass, text: "Discover potential life paths and opportunities" },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-white mb-16">Benefits of Your Cosmic Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-purple-800/50 rounded-lg p-8 flex items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-cyan-300 rounded-full p-3 mr-6">
                <benefit.icon className="w-8 h-8 text-purple-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">{benefit.text}</h3>
                <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;