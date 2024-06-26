import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const features = {
  free: [
    "Instant birth chart generation",
    "Basic AI-powered chart interpretation",
    "Overview of sun, moon, and rising signs",
    "Save Basic Chart to Account"
  ],
  paid: [
    "Comprehensive chart analysis",
    "Unlimited AI-powered questions and insights",
    "Personalized astrological forecasts",
    "Compatibility reports"
  ]
};

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-900/30 to-indigo-900/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-white mb-16">Features</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Free Features</h3>
              <ul className="space-y-4">
                {features.free.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className="text-cyan-300 mr-4 flex-shrink-0" /> 
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Paid Features</h3>
              <ul className="space-y-4">
                {features.paid.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-white"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Star className="text-cyan-300 mr-4 flex-shrink-0" /> 
                    <span className="text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;