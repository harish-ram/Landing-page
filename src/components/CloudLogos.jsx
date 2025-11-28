import { motion } from 'framer-motion'
import { FaAws, FaGoogle, FaMicrosoft } from 'react-icons/fa'

const CloudLogos = () => {
  const logos = [
    { name: 'AWS', Icon: FaAws, color: 'hover:text-orange-500' },
    { name: 'Google Cloud', Icon: FaGoogle, color: 'hover:text-blue-500' },
    { name: 'Microsoft Azure', Icon: FaMicrosoft, color: 'hover:text-cyan-500' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 font-medium mb-2">Trusted by teams managing billions in cloud spend</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Works with all major cloud providers</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center items-center gap-8 md:gap-16 flex-wrap"
        >
          {logos.map(({ name, Icon, color }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-lg blur-xl transition-all duration-300"></div>
              <div className={`text-6xl md:text-7xl text-gray-400 group-hover:text-gray-600 transition-all duration-300 ${color} relative z-10`}>
                <Icon />
              </div>
              <p className="text-center mt-3 text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CloudLogos
