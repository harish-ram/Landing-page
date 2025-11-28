const Logo = ({ size = 'base' }) => {
  const sizeClass = {
    sm: 'w-8 h-8 text-base',
    base: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  }[size]

  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
      style={{
        background: 'linear-gradient(135deg, #9D4EDD 0%, #00D4FF 50%, #00FF88 100%)',
      }}
    >
      <span className="text-white font-bold">$</span>
    </div>
  )
}

export default Logo
