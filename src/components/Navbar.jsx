import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['Features', 'Pricing', 'How It Works', 'Testimonials', 'Contact']

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed w-full top-0 z-50 glassmorphism border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Logo size="base" />
            <span className="glitch-text text-lg hidden sm:inline">OptimCloud</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleScroll(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-sm">
              Sign In
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-vibrant text-white px-6 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Saving
            </motion.button>
          </div>

          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-100 py-4"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-gray-700 hover:text-blue-600 font-medium text-sm text-left px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <button className="text-gray-700 font-medium text-sm w-full text-left py-2">
                  Sign In
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="gradient-vibrant text-white px-4 py-2 rounded-lg font-medium text-sm w-full"
                >
                  Start Saving
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
