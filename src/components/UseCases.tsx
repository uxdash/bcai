import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const useCases = [
  {
    question: "Who am I compatible with as friends? And romantically?",
    answer: "Discover your astrological compatibility for deeper connections."
  },
  {
    question: "How do I improve my relationship with my Leo friend?",
    answer: "Get personalized tips based on your charts and Leo traits."
  },
  {
    question: "What sort of life path options should I explore?",
    answer: "Uncover potential career paths aligned with your cosmic blueprint."
  },
  {
    question: "How can I better understand my emotions and reactions?",
    answer: "Gain insights into your moon sign and emotional patterns."
  },
  {
    question: "What are my strengths and weaknesses according to my birth chart?",
    answer: "Identify your innate talents and areas for growth."
  },
  {
    question: "How can I make the most of upcoming astrological events?",
    answer: "Get personalized advice for navigating celestial influences."
  }
];

const UseCases: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-900/30 to-purple-900/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-center text-white mb-16">
          Unlock Your Cosmic Potential: Real Questions, Real Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-purple-800/50 rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="p-6"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-cyan-300">{useCase.question}</h3>
                  <ChevronDown
                    className={`text-cyan-300 transition-transform duration-300 ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      className="text-white mt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {useCase.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <motion.div
                className="h-1 bg-cyan-300"
                initial={{ width: '0%' }}
                animate={{ width: activeIndex === index ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;