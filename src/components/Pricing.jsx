import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Connect 1 cloud account',
        'Basic cost analysis',
        'Monthly reports',
        'Email support',
        'Dashboard access',
      ],
      cta: 'Start Free',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '₹9,999',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Unlimited cloud accounts',
        'AI-powered recommendations',
        'Real-time alerts',
        'Priority email support',
        'Custom dashboards',
        'Auto-optimization enabled',
        'API access',
      ],
      cta: 'Start Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantee',
        'Advanced security',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your organization. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl transition-all duration-300 ${
                tier.highlighted
                  ? 'md:scale-105 gradient-vibrant p-1'
                  : 'glassmorphism border-cyan-100 card-shadow hover:card-shadow-hover hover:glow-effect hover:border-cyan-300'
              }`}
            >
              <div className={`rounded-2xl p-8 h-full ${tier.highlighted ? 'bg-white' : ''}`}>
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    {tier.period && <span className="text-gray-600 ml-2">{tier.period}</span>}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                    tier.highlighted
                      ? 'gradient-vibrant text-white hover:shadow-lg'
                      : 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {tier.cta}
                </motion.button>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-gray-500">
            Need a custom plan?{' '}
            <button className="text-blue-600 font-semibold hover:text-blue-700">Get in touch</button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
