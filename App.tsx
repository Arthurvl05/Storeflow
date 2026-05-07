import { Download, TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export function Relatorios() {
  const monthlyData = [
    { month: 'Jan', vendas: 4200, clientes: 45 },
    { month: 'Fev', vendas: 3800, clientes: 38 },
    { month: 'Mar', vendas: 5100, clientes: 52 },
    { month: 'Abr', vendas: 6200, clientes: 61 },
  ]

  const categoryData = [
    { name: 'Acessórios', value: 4500 },
    { name: 'Roupas', value: 3200 },
    { name: 'Eletrônicos', value: 2800 },
    { name: 'Casa', value: 1900 },
  ]

  const metrics = [
    { label: 'Vendas Total', value: 'R$ 19.300', change: '+18%', icon: DollarSign, color: '#00BCD4' },
    { label: 'Novos Clientes', value: '196', change: '+12%', icon: Users, color: '#7E57C2' },
    { label: 'Total Pedidos', value: '487', change: '+22%', icon: ShoppingCart, color: '#1A237E' },
    { label: 'Taxa Crescimento', value: '24.5%', change: '+5%', icon: TrendingUp, color: '#4CAF50' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>Relatórios e Análises</h3>
        <button className="h-[44px] px-6 bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300 flex items-center gap-2">
          <Download size={20} />Exportar PDF
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                <metric.icon size={24} style={{ color: metric.color }} />
              </div>
              <span className="text-[12px] text-[#4CAF50] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{metric.change}</span>
            </div>
            <p className="text-[12px] text-[#757575] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{metric.label}</p>
            <p className="text-[28px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
        <h3 className="text-[18px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Crescimento Mensal</h3>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis dataKey="month" tick={{ fill: '#757575', fontSize: 12 }} />
            <YAxis tick={{ fill: '#757575', fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="vendas" stroke="#00BCD4" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="clientes" stroke="#7E57C2" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
        <h3 className="text-[18px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Vendas por Categoria</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis dataKey="name" tick={{ fill: '#757575', fontSize: 12 }} />
            <YAxis tick={{ fill: '#757575', fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#1A237E" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
