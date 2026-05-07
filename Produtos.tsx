import { useState } from 'react'
import { Check, X } from 'lucide-react'

export function Settings() {
  const [activeTab, setActiveTab] = useState<'perfil' | 'loja' | 'integracoes' | 'notificacoes' | 'faturamento'>('perfil')

  const integrations = [
    { name: 'Shopify', description: 'Sincronize produtos e pedidos', status: 'Conectado', color: '#4CAF50' },
    { name: 'Gmail', description: 'Automação de email marketing', status: 'Conectado', color: '#4CAF50' },
    { name: 'Stripe', description: 'Gateway de pagamento', status: 'Conectado', color: '#4CAF50' },
    { name: 'WhatsApp', description: 'Mensagens automáticas', status: 'Desconectado', color: '#757575' },
    { name: 'Google Analytics', description: 'Análise de tráfego', status: 'Desconectado', color: '#757575' },
    { name: 'Canva', description: 'Design automático', status: 'Desconectado', color: '#757575' },
  ]

  const invoices = [
    { date: '01/04/2026', plan: 'Premium', value: 'R$ 99,90', status: 'Pago' },
    { date: '01/03/2026', plan: 'Premium', value: 'R$ 99,90', status: 'Pago' },
    { date: '01/02/2026', plan: 'Premium', value: 'R$ 99,90', status: 'Pago' },
  ]

  const tabs = [
    { id: 'perfil' as const, label: 'Perfil' },
    { id: 'loja' as const, label: 'Loja' },
    { id: 'integracoes' as const, label: 'Integrações' },
    { id: 'notificacoes' as const, label: 'Notificações' },
    { id: 'faturamento' as const, label: 'Faturamento' },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-[#E0E0E0]">
        <div className="flex border-b border-[#E0E0E0]">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 px-6 py-4 text-[14px] font-medium transition-all duration-300 ${activeTab === tab.id ? 'text-[#00BCD4] border-b-2 border-[#00BCD4] bg-[#F5F5F5]' : 'text-[#757575] hover:bg-[#F5F5F5]'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'perfil' && (
            <div className="space-y-6 max-w-2xl">
              {[['Nome Completo', 'text', 'João Silva'], ['Email', 'email', 'user@example.com'], ['Telefone', 'tel', '(11) 98765-4321']].map(([label, type, val]) => (
                <div key={label}>
                  <label className="block text-[12px] font-medium text-[#757575] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</label>
                  <input type={type} defaultValue={val} className="w-full h-[44px] px-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
                </div>
              ))}
              <button className="h-[44px] px-8 bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300">Salvar Alterações</button>
            </div>
          )}

          {activeTab === 'loja' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-[12px] font-medium text-[#757575] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Nome da Loja</label>
                <input type="text" defaultValue="Minha Loja Online" className="w-full h-[44px] px-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#757575] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Domínio</label>
                <input type="text" defaultValue="minhaloja.com.br" className="w-full h-[44px] px-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
              </div>
              <div>
                <label className="block text-[12px] font-medium text-[#757575] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Descrição</label>
                <textarea rows={4} defaultValue="Loja especializada em produtos premium com design moderno" className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }} />
              </div>
              <button className="h-[44px] px-8 bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300">Salvar Alterações</button>
            </div>
          )}

          {activeTab === 'integracoes' && (
            <div className="grid grid-cols-2 gap-5">
              {integrations.map((integration, index) => (
                <div key={index} className="border border-[#E0E0E0] rounded-xl p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-[16px] font-bold text-[#1A237E] mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>{integration.name}</h4>
                      <p className="text-[12px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{integration.description}</p>
                    </div>
                    {integration.status === 'Conectado' ? (
                      <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center"><Check size={16} className="text-white" /></div>
                    ) : (
                      <div className="w-8 h-8 bg-[#E0E0E0] rounded-full flex items-center justify-center"><X size={16} className="text-[#757575]" /></div>
                    )}
                  </div>
                  <button className={`w-full h-[44px] rounded-lg transition-all duration-300 ${integration.status === 'Conectado' ? 'bg-[#E0E0E0] text-[#757575] hover:bg-[#D0D0D0]' : 'bg-[#00BCD4] text-white hover:bg-[#00ACC1]'}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 500 }}>
                    {integration.status === 'Conectado' ? 'Desconectar' : 'Conectar'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notificacoes' && (
            <div className="space-y-4 max-w-2xl">
              {['Novos pedidos', 'Campanhas finalizadas', 'Relatórios semanais', 'Atualizações do sistema'].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-[#E0E0E0] rounded-lg">
                  <span className="text-[14px] text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{item}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked={index < 2} className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#E0E0E0] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#00BCD4] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00BCD4]"></div>
                  </label>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'faturamento' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1A237E] to-[#7E57C2] rounded-xl p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[14px] opacity-90 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Plano Atual</p>
                    <h3 className="text-[32px] font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>Premium</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] opacity-90 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Mensalidade</p>
                    <h3 className="text-[32px] font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>R$ 99,90</h3>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 h-[44px] bg-white text-[#1A237E] rounded-lg hover:bg-gray-100 transition-all duration-300">Alterar Plano</button>
                  <button className="flex-1 h-[44px] bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300">Cancelar Plano</button>
                </div>
              </div>

              <div>
                <h4 className="text-[18px] font-bold text-[#1A237E] mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>Histórico de Pagamentos</h4>
                <div className="space-y-3">
                  {invoices.map((invoice, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-[#E0E0E0] rounded-lg hover:shadow-md transition-all duration-300">
                      <div>
                        <p className="text-[14px] font-medium text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{invoice.plan}</p>
                        <p className="text-[12px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[14px] font-medium text-[#1A237E]" style={{ fontFamily: 'Inter, sans-serif' }}>{invoice.value}</p>
                        <span className="text-[12px] text-[#4CAF50] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>{invoice.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
