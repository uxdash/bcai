'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Aria Moon",
    avatar: "/images/avatars/aria.jpg",
    rating: 5,
    text: "BirthCharts.ai transformed my understanding of astrology. The AI&apos;s insights were surprisingly accurate and personal!"
  },
  {
    id: 2,
    name: "Leo Stargazer",
    avatar: "/images/avatars/leo.jpg",
    rating: 5,
    text: "As an astrology enthusiast, I&apos;m impressed by the depth of analysis. It&apos;s like having a personal astrologer at your fingertips!"
  },
  {
    id: 3,
    name: "Nova Celestia",
    avatar: "/images/avatars/nova.jpg",
    rating: 5,
    text: "The interface is beautiful and intuitive. I love how I can chat with the AI to dig deeper into my chart&apos;s meaning."
  }
];

const CustomerReviews: React.FC = () => {
  return (
    <motion.div 
      className="mt-16 bg-purple-900/30 backdrop-blur-md rounded-lg p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-display font-bold mb-8 text-center text-white">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <motion.div 
            key={review.id}
            className="bg-purple-800/50 rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Image 
                src={review.avatar} 
                alt={review.name} 
                width={50} 
                height={50} 
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg text-white">{review.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < review.rating ? "yellow" : "none"} 
                      stroke={i < review.rating ? "yellow" : "currentColor"}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 italic">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CustomerReviews;