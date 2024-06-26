'use client'

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInputEffect } from '@/hooks/useInputEffect';

const planets = [
  { name: 'sun', size: 100 },
  { name: 'moon', size: 80 },
  { name: 'mercury', size: 40 },
  { name: 'venus', size: 60 },
  { name: 'mars', size: 50 },
  { name: 'jupiter', size: 120 },
  { name: 'saturn', size: 110 },
  { name: 'uranus', size: 70 },
  { name: 'neptune', size: 65 },
  { name: 'pluto', size: 30 },
];

interface PlanetPosition {
  x: number;
  y: number;
}

const PlanetaryBackground: React.FC = () => {
  const [planetPositions, setPlanetPositions] = useState<PlanetPosition[]>(
    planets.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))
  );

  const movePlanets = useCallback(() => {
    setPlanetPositions(prevPositions =>
      prevPositions.map(pos => ({
        x: pos.x + (Math.random() - 0.5) * 40, // Doubled from 20 to 40
        y: pos.y + (Math.random() - 0.5) * 40, // Doubled from 20 to 40
      }))
    );
    console.log('Planets moved!'); // Debug log
  }, []);

  useInputEffect(movePlanets);

  useEffect(() => {
    // Initial positioning
    setPlanetPositions(
      planets.map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {planets.map((planet, index) => (
        <motion.div
          key={planet.name}
          className="absolute"
          animate={{
            x: planetPositions[index]?.x,
            y: planetPositions[index]?.y,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={`/images/planets/${planet.name}.png`}
            alt={planet.name}
            width={planet.size}
            height={planet.size}
            className="opacity-30"
          />
        </motion.div>
      ))}
      {/* Shooting stars code remains the same */}
    </div>
  );
};

export default PlanetaryBackground;