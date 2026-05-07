import { Eye } from 'lucide-react'

export function Pedidos() {
  const orders = [
    { id: '#1234', customer: 'Maria Silva', product: 'Caneca Premium', value: 'R$ 45,00', date: '30/04/2026', status: 'Pago', statusColor: '#4CAF50' },
    { id: '#1235', customer: 'João Santos', product: 'Camiseta Basic', value: 'R$ 65,00', date: '30/04/2026', status: 'Pendente', statusColor: '#FF9800' },
    { id: '#1236', customer: 'Ana Costa', product: 'Mochila Pro', value: 'R$ 120,00', date: '29/04/2026', status: 'Pago', statusColor: '#4CAF50' },
    { id: '#1237', customer: 'Pedro Lima', product: 'Fone Bluetooth', value: 'R$ 180,00', date: '29/04/2026', status: 'Pago', statusColor: '#4CAF50' },
    { id: '#1238', customer: 'Carla Souza', product: 'Caneca Premium', value: 'R$ 45,00', date: '28/04/2026', status: 'Cancelado', statusColor: '#F44336' },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-[20px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>Todos os Pedidos</h3>
      <div className="bg-white rounded-xl border border-[#E0E0E0]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E0E0E0]">
                {['Pedido', 'Cliente', 'Produto', 'Valor', 'Data', 'Status', 'Ações'].map((h) => (
                  <th key={h} className="text-left p-4 text-[12px] font-medium text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b border-[#E0E0E0] hover:bg-[#F5F5F5] transition-all duration-300">
                  <td className="p-4 text-[14px] text-[#1A237E] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{order.id}</td>
                  <td className="p-4 text-[14px] text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.customer}</td>
                  <td className="p-4 text-[14px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.product}</td>
                  <td className="p-4 text-[14px] text-[#1A237E] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{order.value}</td>
                  <td className="p-4 text-[14px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{order.date}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-lg text-[12px] font-medium" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: `${order.statusColor}20`, color: order.statusColor }}>{order.status}</span>
                  </td>
                  <td className="p-4">
                    <button className="p-2 hover:bg-[#F5F5F5] rounded-lg transition-all duration-300">
                      <Eye size={18} className="text-[#00BCD4]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
