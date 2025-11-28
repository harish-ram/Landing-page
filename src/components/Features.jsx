import { motion } from 'framer-motion'
import { FiTrendingDown, FiActivity, FiCpu, FiBell } from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: FiTrendingDown,
      title: 'AI Cost Optimization',
      description: 'Auto-detect unused resources and get predictive scaling recommendations powered by machine learning.',
    },
    {
      icon: FiActivity,
      title: 'Multi-Cloud Dashboard',
      description: 'Unified view of AWS, GCP, and Azure spend with real-time alerts and cost tracking.',
    },
    {
      icon: FiCpu,
      title: 'Automated Rightsizing',
      description: 'Intelligent idle VM detection and automatic storage tier optimization for maximum savings.',
    },
    {
      icon: FiBell,
      title: 'Smart Alerts',
      description: 'Monthly cost projections and budget threshold warnings to stay on top of your cloud spend.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Cloud Cost Control
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to optimize your cloud infrastructure and reduce costs automatically
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glassmorphism rounded-2xl p-6 border-cyan-100 hover:border-cyan-300 card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer hover:glow-effect"
              >
                <div className="mb-4 inline-flex p-3 bg-gradient-subtle rounded-lg group-hover:gradient-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
