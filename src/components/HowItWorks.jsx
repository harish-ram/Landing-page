import { motion } from 'framer-motion'
import { FiLink, FiBarChart2, FiCheckCircle } from 'react-icons/fi'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: FiLink,
      title: 'Connect Your Cloud Accounts',
      description: 'Link your AWS, GCP, or Azure accounts in minutes. Secure API connections with read-only access.',
    },
    {
      number: '02',
      icon: FiBarChart2,
      title: 'Get Instant Cost Analysis',
      description: 'Our AI analyzes your infrastructure and identifies optimization opportunities automatically.',
    },
    {
      number: '03',
      icon: FiCheckCircle,
      title: 'Apply One-Click Optimizations',
      description: 'Review recommendations and apply optimizations with a single click to start saving.',
    },
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 via-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps and start saving on cloud costs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index}>
                <motion.div
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="glassmorphism rounded-2xl p-8 h-full card-shadow hover:card-shadow-hover transition-all duration-300 border-cyan-100 hover:border-cyan-300 hover:glow-effect">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="text-5xl font-bold text-gray-200">{step.number}</div>
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-8 transform translate-x-16">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-2xl text-blue-500"
                      >
                        →
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
