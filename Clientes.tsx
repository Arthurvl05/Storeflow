import { Outlet, Link, useLocation } from 'react-router'
import { Home, TrendingUp, Settings, Package, Users, BarChart3, Megaphone, Bell, User } from 'lucide-react'
import { Logo } from './Logo'

export function DashboardLayout() {
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/dashboard/marketing', icon: Megaphone, label: 'Marketing' },
    { path: '/dashboard/produtos', icon: Package, label: 'Produtos' },
    { path: '/dashboard/pedidos', icon: TrendingUp, label: 'Pedidos' },
    { path: '/dashboard/clientes', icon: Users, label: 'Clientes' },
    { path: '/dashboard/relatorios', icon: BarChart3, label: 'Relatórios' },
    { path: '/dashboard/settings', icon: Settings, label: 'Configurações' },
  ]

  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      <aside className="w-[280px] bg-white border-r border-[#E0E0E0] flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-[#E0E0E0]">
          <Logo variant="dark" size="md" />
        </div>

        <nav className="flex-1 py-6 px-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all duration-300 ${
                  isActive ? 'bg-[#1A237E] text-white' : 'text-[#757575] hover:bg-[#F5F5F5]'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-20 bg-white border-b border-[#E0E0E0] flex items-center justify-between px-8">
          <h2 className="text-[28px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>
            {menuItems.find((item) => item.path === location.pathname)?.label || 'Dashboard'}
          </h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#F5F5F5] rounded-lg transition-all duration-300">
              <Bell size={20} className="text-[#757575]" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-[#1A237E] to-[#00BCD4] rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
