import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, PieChart, MessageCircle } from 'lucide-react';

const steps = [
  { icon: FileText, text: "Enter your birth details" },
  { icon: Cpu, text: "AI generates your birth chart" },
  { icon: PieChart, text: "Explore your cosmic blueprint" },
  { icon: MessageCircle, text: "Ask questions and dive deeper" },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-purple-900/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-white mb-12">How It Works</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-purple-400 transform -translate-y-1/2"></div>
          <div className="flex justify-between items-center relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center ${index % 2 === 0 ? '-mt-32' : 'mt-32'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-purple-800/50 rounded-full p-4 mb-4">
                  <step.icon className="w-8 h-8 text-cyan-300" />
                </div>
                <div className="w-40 text-center">
                  <p className="text-white text-lg">{step.text}</p>
                </div>
                <div className="w-4 h-4 bg-cyan-300 rounded-full mt-4"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;