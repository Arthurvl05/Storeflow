import { Mail, Phone } from 'lucide-react'

export function Clientes() {
  const customers = [
    { name: 'Maria Silva', email: 'maria@email.com', phone: '(11) 98765-4321', orders: 12, total: 'R$ 1.240' },
    { name: 'João Santos', email: 'joao@email.com', phone: '(11) 98765-4322', orders: 8, total: 'R$ 890' },
    { name: 'Ana Costa', email: 'ana@email.com', phone: '(11) 98765-4323', orders: 15, total: 'R$ 1.580' },
    { name: 'Pedro Lima', email: 'pedro@email.com', phone: '(11) 98765-4324', orders: 6, total: 'R$ 720' },
    { name: 'Carla Souza', email: 'carla@email.com', phone: '(11) 98765-4325', orders: 10, total: 'R$ 1.100' },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-[20px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>Meus Clientes</h3>
      <div className="grid gap-5">
        {customers.map((customer, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-[#E0E0E0] hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A237E] to-[#00BCD4] rounded-full flex items-center justify-center text-white text-[20px] font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  {customer.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[16px] font-bold text-[#1A237E] mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>{customer.name}</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-[12px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Mail size={14} />{customer.email}
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Phone size={14} />{customer.phone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-[12px] text-[#757575] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Pedidos</p>
                  <p className="text-[20px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>{customer.orders}</p>
                </div>
                <div className="text-center">
                  <p className="text-[12px] text-[#757575] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Total Gasto</p>
                  <p className="text-[20px] font-bold text-[#00BCD4]" style={{ fontFamily: 'Roboto, sans-serif' }}>{customer.total}</p>
                </div>
                <button className="h-[44px] px-6 bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
