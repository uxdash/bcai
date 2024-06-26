'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import CustomerReviews from '@/components/CustomerReviews'

const PlanetaryBackground = dynamic(() => import('@/components/PlanetaryBackground'), {
  ssr: false,
})

interface BirthInfo {
  date: string;
  time: string;
  place: string;
}

interface ChartData {
  message: string;
  reading: string;
}

export default function Home() {
  const [birthInfo, setBirthInfo] = useState<BirthInfo>({
    date: '',
    time: '',
    place: '',
  })
  const [chartData, setChartData] = useState<ChartData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBirthInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/generate-chart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(birthInfo),
      })
      if (!response.ok) {
        throw new Error('Failed to generate birth chart')
      }
      const data: ChartData = await response.json()
      setChartData(data)
    } catch (err) {
      setError('An error occurred while generating the birth chart')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PlanetaryBackground />
      <div className="relative z-10">
        <header className="pt-32 pb-4 text-center">
          <motion.h1 
            className="text-6xl font-display font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Your Cosmic Blueprint With AI
          </motion.h1>
          <motion.h2
            className="text-2xl text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Birth charts can be confusing. Chat with AI to understand your birth chart fully.
          </motion.h2>
        </header>

        <main>
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-8 mb-16">
                <motion.div 
                  className="w-full md:w-1/2 flex flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-purple-900/30 backdrop-blur-md shadow-lg rounded-lg p-8 h-full">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative">
                        <label htmlFor="date" className="block text-lg mb-2 text-white">Birth Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" size={20} />
                          <input
                            type="date"
                            id="date"
                            name="date"
                            value={birthInfo.date}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 pl-10 border border-purple-400 rounded-md bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent transition appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="time" className="block text-lg mb-2 text-white">Birth Time (optional)</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" size={20} />
                          <input
                            type="time"
                            id="time"
                            name="time"
                            value={birthInfo.time}
                            onChange={handleInputChange}
                            className="w-full p-3 pl-10 border border-purple-400 rounded-md bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent transition appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0"
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <label htmlFor="place" className="block text-lg mb-2 text-white">Birth Place</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" size={20} />
                          <input
                            type="text"
                            id="place"
                            name="place"
                            value={birthInfo.place}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 pl-10 border border-purple-400 rounded-md bg-purple-900/50 text-white focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"
                            placeholder="e.g., New York, NY, USA"
                          />
                        </div>
                      </div>
                      <motion.button
                        type="submit"
                        className="w-full bg-white text-purple-900 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 mt-4"
                        disabled={loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {loading ? 'Generating...' : 'Generate Birth Chart'}
                      </motion.button>
                    </form>
                  </div>
                </motion.div>

                <motion.div
                  className="w-full md:w-1/2 flex items-center justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/example-screenshot.png"
                      alt="Example of BirthChart.ai in action"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>

              {error && (
                <motion.div 
                  className="mt-4 p-4 bg-red-500/10 border border-red-500 text-red-300 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {error}
                </motion.div>
              )}

              {chartData && (
                <motion.div 
                  className="mt-8 p-6 bg-purple-900/30 backdrop-blur-md rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-display font-bold mb-4 text-white">Your Birth Chart</h2>
                  <p className="text-lg leading-relaxed text-white">{chartData.reading}</p>
                </motion.div>
              )}
            </div>
          </section>

          <section className="py-16 bg-purple-900/30 backdrop-blur-md">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-display font-bold text-center text-white mb-12">How It Works</h2>
              <HowItWorks />
            </div>
          </section>

          <Benefits />
          <Features />
          <UseCases />
          
          <section className="py-16 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-md">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Ready to Explore Your Cosmic Blueprint?
              </h2>
              <motion.button
                className="bg-white text-purple-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Generate Your Birth Chart
              </motion.button>
            </div>
          </section>
          
          <CustomerReviews />
        </main>
      </div>
    </>
  )
}