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

const benefits = [
  "Gain deep self-understanding",
  "Make informed decisions aligned with your cosmic energy",
  "Improve relationships through astrological insights",
  "Discover potential life paths and opportunities"
];

const FeaturesAndBenefits: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-900/30 to-indigo-900/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-white mb-12">Features and Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Free Features</h3>
            <ul className="space-y-4">
              {features.free.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Check className="text-green-400 mr-2 flex-shrink-0" /> 
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Paid Features</h3>
            <ul className="space-y-4">
              {features.paid.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Star className="text-yellow-300 mr-2 flex-shrink-0" /> 
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-yellow-300 font-bold">{index + 1}</span>
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndBenefits;