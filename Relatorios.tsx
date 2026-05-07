import { Zap } from 'lucide-react'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export function Logo({ variant = 'dark', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { container: 'w-8 h-8', icon: 16, text: 'text-[16px]' },
    md: { container: 'w-12 h-12', icon: 24, text: 'text-[24px]' },
    lg: { container: 'w-16 h-16', icon: 32, text: 'text-[32px]' },
  }

  const colors = {
    light: { bg: 'bg-white', icon: 'text-[#1A237E]', text: 'text-white' },
    dark: { bg: 'bg-gradient-to-br from-[#1A237E] to-[#00BCD4]', icon: 'text-white', text: 'text-[#1A237E]' },
  }

  return (
    <div className="flex items-center gap-3">
      <div className={`${sizes[size].container} ${colors[variant].bg} rounded-lg flex items-center justify-center shadow-md`}>
        <Zap size={sizes[size].icon} className={colors[variant].icon} fill={variant === 'dark' ? 'white' : '#1A237E'} />
      </div>
      {showText && (
        <span className={`${sizes[size].text} font-bold ${colors[variant].text}`} style={{ fontFamily: 'Roboto, sans-serif' }}>
          StoreFlow
        </span>
      )}
    </div>
  )
}
