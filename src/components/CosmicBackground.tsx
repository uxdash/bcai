import React from 'react';

const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      
      {/* Shooting stars */}
      <div className="shooting-star star1"></div>
      <div className="shooting-star star2"></div>
      <div className="shooting-star star3"></div>
    </div>
  );
};

export default CosmicBackground;