import { TrendingUp, ShoppingCart, Target, DollarSign, Sparkles } from 'lucide-react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export function Dashboard() {
  const kpiData = [
    { label: 'Vendas Hoje', value: 'R$ 2.450', change: '+12%', icon: DollarSign, color: '#00BCD4' },
    { label: 'Pedidos', value: '24', change: '+8%', icon: ShoppingCart, color: '#7E57C2' },
    { label: 'Conversão', value: '3.2%', change: '+0.5%', icon: Target, color: '#1A237E' },
    { label: 'Ticket Médio', value: 'R$ 102', change: '+5%', icon: TrendingUp, color: '#00BCD4' },
  ]

  const salesData = [
    { name: 'Seg', vendas: 450, cliques: 1200 },
    { name: 'Ter', vendas: 620, cliques: 1400 },
    { name: 'Qua', vendas: 380, cliques: 1100 },
    { name: 'Qui', vendas: 720, cliques: 1600 },
    { name: 'Sex', vendas: 580, cliques: 1300 },
    { name: 'Sáb', vendas: 890, cliques: 1800 },
    { name: 'Dom', vendas: 650, cliques: 1500 },
  ]

  const channelData = [
    { name: 'Instagram', value: 35, color: '#7E57C2' },
    { name: 'TikTok', value: 28, color: '#00BCD4' },
    { name: 'Email', value: 22, color: '#1A237E' },
    { name: 'Direto', value: 15, color: '#E0E0E0' },
  ]

  const recentOrders = [
    { id: '#1234', product: 'Caneca Premium', value: 'R$ 45,00', status: 'Pago', statusColor: '#4CAF50' },
    { id: '#1235', product: 'Camiseta Basic', value: 'R$ 65,00', status: 'Pendente', statusColor: '#FF9800' },
    { id: '#1236', product: 'Mochila Pro', value: 'R$ 120,00', status: 'Pago', statusColor: '#4CAF50' },
    { id: '#1237', product: 'Fone Bluetooth', value: 'R$ 180,00', status: 'Pago', statusColor: '#4CAF50' },
    { id: '#1238', product: 'Caneca Premium', value: 'R$ 45,00', status: 'Cancelado', statusColor: '#F44336' },
  ]

  const aiSuggestions = [
    'Criar campanha Black Friday',
    'Otimizar descrição de produtos',
    'Gerar post para Instagram',
    'Análise de concorrentes',
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-5">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${kpi.color}20` }}>
                <kpi.icon size={24} style={{ color: kpi.color }} />
              </div>
              <span className="text-[12px] text-[#4CAF50] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{kpi.change}</span>
            </div>
            <p className="text-[12px] text-[#757575] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{kpi.label}</p>
            <p className="text-[28px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
          <h3 className="text-[18px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Vendas vs Cliques</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="name" tick={{ fill: '#757575', fontSize: 12 }} />
              <YAxis tick={{ fill: '#757575', fontSize: 12 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="vendas" fill="#00BCD4" radius={[8, 8, 0, 0]} />
              <Bar dataKey="cliques" fill="#7E57C2" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
          <h3 className="text-[18px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Canais de Venda</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={channelData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={90} dataKey="value">
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
          <h3 className="text-[18px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Assistente IA</h3>
          <div className="grid grid-cols-2 gap-3">
            {aiSuggestions.map((suggestion, index) => (
              <button key={index} className="p-4 bg-gradient-to-br from-[#1A237E] to-[#7E57C2] text-white rounded-lg hover:shadow-lg transition-all duration-300 text-left flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                <Sparkles size={18} />
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
          <h3 className="text-[18px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Pedidos Recentes</h3>
          <div className="space-y-3">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[#F5F5F5] rounded-lg">
                <div className="flex-1">
                  <p className="text-[14px] font-medium text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.product}</p>
                  <p className="text-[12px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-medium text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.value}</p>
                  <span className="text-[12px] font-medium px-2 py-1 rounded" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: `${order.statusColor}20`, color: order.statusColor }}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
