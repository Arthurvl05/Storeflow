import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Logo } from './Logo'

export function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'user@example.com' && password === 'password') {
      navigate('/dashboard')
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-br from-[#1A237E] to-[#00BCD4] flex items-center justify-center p-16">
        <div className="text-white">
          <Logo variant="light" size="lg" />
          <p className="text-lg opacity-90 mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Automatize suas vendas e marketing digital
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center p-16">
        <div className="w-full max-w-md">
          <h2 className="text-[28px] font-bold mb-8 text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Bem-vindo
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[12px] font-medium text-[#757575] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[44px] px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] transition-all"
                placeholder="seu@email.com"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[12px] font-medium text-[#757575] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[44px] px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] transition-all"
                placeholder="••••••••"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              />
            </div>

            <button
              type="submit"
              className="w-full h-[44px] bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300 hover:shadow-md"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
            >
              Entrar
            </button>

            <div className="flex justify-between text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
              <a href="#" className="text-[#00BCD4] hover:underline">Esqueci minha senha</a>
              <a href="#" className="text-[#00BCD4] hover:underline">Criar conta</a>
            </div>
          </form>

          <p className="mt-8 text-[12px] text-[#757575] text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
            Use: user@example.com / password
          </p>
        </div>
      </div>
    </div>
  )
}
