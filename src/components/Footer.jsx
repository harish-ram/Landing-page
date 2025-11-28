import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Documentation', 'API', 'Community', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'DPA'],
  }

  const socialLinks = [
    { icon: FiLinkedin, label: 'LinkedIn' },
    { icon: FiTwitter, label: 'Twitter' },
    { icon: FiGithub, label: 'GitHub' },
  ]

  return (
    <footer id="contact" className="gradient-dark text-gray-300 pt-16 md:pt-24 pb-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="base" />
              <span className="brand-font text-white text-lg">OptimCloud</span>
            </div>
            <p className="text-gray-400 text-sm">
              Reduce your cloud bills by up to 40% automatically.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Cloud Cost Optimizer. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@cloudcost.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <FiMail className="w-4 h-4" />
                hello@cloudcost.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
