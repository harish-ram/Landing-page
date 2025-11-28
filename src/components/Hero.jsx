import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Reduce Your Cloud Bills by up to{' '}
              <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 bg-clip-text text-transparent">40% Automatically</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              AI-powered optimization for AWS, Azure, and Google Cloud. No engineering effort required.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-vibrant text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start Free Trial
                <FiArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-200"
              >
                Request Demo
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[
                  { name: 'Airbnb', initials: 'AB', colors: 'from-pink-500 to-red-500' },
                  { name: 'Stripe', initials: 'ST', colors: 'from-blue-600 to-blue-400' },
                  { name: 'Figma', initials: 'FG', colors: 'from-purple-500 to-pink-500' },
                ].map((company, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 bg-gradient-to-br ${company.colors} rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md hover:shadow-lg transition-shadow duration-200`}
                    title={company.name}
                  >
                    {company.initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">1000+</span> companies already saving
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 gradient-vibrant opacity-15 rounded-2xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl p-6 card-shadow glow-effect border border-cyan-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Monthly Savings</h3>
                    <span className="text-3xl font-bold text-cyan-500">$12,500</span>
                  </div>
                  <div className="h-32 bg-gradient-subtle rounded-lg flex items-end justify-between px-4 py-4">
                    {[40, 60, 35, 80, 55, 70, 65].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
                        className="w-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full"
                      ></motion.div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-600">32%</div>
                      <div className="text-xs text-gray-600">AWS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-cyan-500">28%</div>
                      <div className="text-xs text-gray-600">GCP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-400">25%</div>
                      <div className="text-xs text-gray-600">Azure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
