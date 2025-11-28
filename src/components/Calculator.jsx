import { useState } from 'react'
import { motion } from 'framer-motion'

const Calculator = () => {
  const [monthlySpend, setMonthlySpend] = useState(100000)
  const savingsPercentage = 28
  const monthlySavings = Math.floor(monthlySpend * (savingsPercentage / 100))
  const yearlySavings = monthlySavings * 12

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-cyan-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg text-gray-600">
            See how much you could save with Cloud Cost Optimizer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="glassmorphism rounded-2xl p-8 md:p-12 card-shadow glow-effect border-cyan-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col justify-center">
              <label className="text-gray-700 font-semibold mb-4">
                Your Monthly Cloud Spend
              </label>
              <div className="mb-4">
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
              <motion.div
                key={monthlySpend}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-cyan-500 mb-4"
              >
                {formatCurrency(monthlySpend)}
              </motion.div>
              <p className="text-sm text-gray-600">
                Drag to adjust your monthly cloud spending
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="mb-8">
                <p className="text-gray-600 text-sm mb-2">You could save</p>
                <motion.div
                  key={monthlySavings}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-green-600 mb-1"
                >
                  {formatCurrency(monthlySavings)}
                </motion.div>
                <p className="text-gray-600 text-sm">per month</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Annual Savings</p>
                    <motion.p
                      key={yearlySavings}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl md:text-2xl font-bold text-green-600"
                    >
                      {formatCurrency(yearlySavings)}
                    </motion.p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">Savings Rate</p>
                    <p className="text-xl md:text-2xl font-bold text-blue-600">{savingsPercentage}%</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 gradient-vibrant text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Start Optimizing Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Calculator
