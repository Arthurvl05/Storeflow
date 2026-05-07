import { Package, Plus } from 'lucide-react'

export function Produtos() {
  const products = [
    { name: 'Caneca Premium', price: 'R$ 45,00', stock: 48, status: 'Ativo' },
    { name: 'Camiseta Basic', price: 'R$ 65,00', stock: 32, status: 'Ativo' },
    { name: 'Mochila Pro', price: 'R$ 120,00', stock: 15, status: 'Ativo' },
    { name: 'Fone Bluetooth', price: 'R$ 180,00', stock: 8, status: 'Ativo' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>Meus Produtos</h3>
        <button className="h-[44px] px-6 bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300 flex items-center gap-2">
          <Plus size={20} />Adicionar Produto
        </button>
      </div>

      <div className="bg-white rounded-xl border border-[#E0E0E0]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E0E0E0]">
                {['Produto', 'Preço', 'Estoque', 'Status', 'Ações'].map((h) => (
                  <th key={h} className="text-left p-4 text-[12px] font-medium text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-[#E0E0E0] hover:bg-[#F5F5F5] transition-all duration-300">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1A237E] to-[#00BCD4] rounded-lg flex items-center justify-center">
                        <Package size={20} className="text-white" />
                      </div>
                      <span className="text-[14px] text-[#1A237E] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-[14px] text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{product.price}</td>
                  <td className="p-4 text-[14px] text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{product.stock} unidades</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-[#4CAF50] bg-opacity-20 text-[#4CAF50] rounded-lg text-[12px] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{product.status}</span>
                  </td>
                  <td className="p-4">
                    <button className="text-[14px] text-[#00BCD4] hover:underline" style={{ fontFamily: 'Inter, sans-serif' }}>Editar</button>
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
