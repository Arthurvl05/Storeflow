import { useState } from 'react'
import { TrendingUp, Play, Pause, Eye, DollarSign, Target, ShoppingCart } from 'lucide-react'

export function Marketing() {
  const [activeTab, setActiveTab] = useState<'descricao' | 'legenda' | 'email'>('descricao')

  const campaigns = [
    { name: 'Promoção Verão', platform: 'Instagram', status: 'Ativa', statusColor: '#4CAF50', impressions: '12.5k', clicks: '842', conversions: '48', budget: 'R$ 350' },
    { name: 'Black Friday', platform: 'TikTok', status: 'Pausada', statusColor: '#FF9800', impressions: '8.2k', clicks: '521', conversions: '32', budget: 'R$ 250' },
    { name: 'Clientes VIP', platform: 'Email', status: 'Ativa', statusColor: '#4CAF50', impressions: '3.1k', clicks: '412', conversions: '28', budget: 'R$ 100' },
  ]

  const performanceData = [
    { label: 'ROI', value: '245%', icon: TrendingUp, color: '#4CAF50' },
    { label: 'Gasto Total', value: 'R$ 700', icon: DollarSign, color: '#7E57C2' },
    { label: 'Conversões', value: '108', icon: Target, color: '#00BCD4' },
    { label: 'Ticket Médio', value: 'R$ 95', icon: ShoppingCart, color: '#1A237E' },
  ]

  const tabContent = {
    descricao: 'Caneca térmica premium com isolamento duplo, mantém bebidas quentes por 6h e frias por 12h. Design ergonômico com acabamento fosco e tampa à prova de vazamento. Capacidade de 500ml, ideal para café, chá ou água. Disponível em 5 cores modernas.',
    legenda: '☕ Sua bebida na temperatura ideal o dia todo! 🔥❄️\n\nDescobrindo a Caneca Térmica Premium que vai revolucionar suas pausas! 💫\n\n✅ 6h quente | 12h frio\n✅ 500ml de pura praticidade\n✅ Design minimalista\n\n👉 Garanta a sua agora! Link na bio\n\n#caneca #termico #lifestyle #cafedamanha',
    email: 'Assunto: ☕ Transforme suas pausas com a Caneca Premium!\n\n---\n\nOlá!\n\nCansado de bebidas que esfriam rápido? Apresentamos a Caneca Térmica Premium - a solução perfeita para quem valoriza cada gole.\n\n🎯 Por que escolher nossa caneca?\n• Isolamento térmico de alta performance\n• Design moderno que combina com seu estilo\n• Durabilidade garantida\n• Sustentável e reutilizável\n\n💰 Oferta especial: R$ 45,00 (antes R$ 59,90)\n\n[Comprar Agora]\n\nAbraços,\nEquipe StoreFlow',
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#E0E0E0]">
        <h3 className="text-[20px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Campanhas Ativas</h3>
        <div className="grid gap-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="border border-[#E0E0E0] rounded-xl p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-[18px] font-bold text-[#1A237E] mb-1" style={{ fontFamily: 'Roboto, sans-serif' }}>{campaign.name}</h4>
                  <p className="text-[14px] text-[#757575]" style={{ fontFamily: 'Inter, sans-serif' }}>{campaign.platform}</p>
                </div>
                <span className="px-3 py-1 rounded-lg text-[12px] font-medium" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: `${campaign.statusColor}20`, color: campaign.statusColor }}>{campaign.status}</span>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[['Impressões', campaign.impressions], ['Cliques', campaign.clicks], ['Conversões', campaign.conversions], ['Orçamento', campaign.budget]].map(([label, val]) => (
                  <div key={label}>
                    <p className="text-[12px] text-[#757575] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
                    <p className="text-[16px] font-bold text-[#1A237E]" style={{ fontFamily: 'Roboto, sans-serif' }}>{val}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <button className="flex-1 h-[44px] bg-[#00BCD4] text-white rounded-lg hover:bg-[#00ACC1] transition-all duration-300 flex items-center justify-center gap-2">
                  <Eye size={18} />Ver Detalhes
                </button>
                <button className="h-[44px] px-6 bg-[#E0E0E0] text-[#757575] rounded-lg hover:bg-[#D0D0D0] transition-all duration-300 flex items-center justify-center gap-2">
                  {campaign.status === 'Ativa' ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#E0E0E0]">
        <h3 className="text-[20px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Gerador de Conteúdo IA</h3>
        <div className="flex gap-2 mb-6 border-b border-[#E0E0E0]">
          {(['descricao', 'legenda', 'email'] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-[14px] font-medium transition-all duration-300 ${activeTab === tab ? 'text-[#00BCD4] border-b-2 border-[#00BCD4]' : 'text-[#757575] hover:text-[#1A237E]'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
              {tab === 'descricao' ? 'Descrição Produto' : tab === 'legenda' ? 'Legenda Social' : 'Email Marketing'}
            </button>
          ))}
        </div>
        <div className="bg-[#F5F5F5] rounded-lg p-6 mb-4">
          <p className="text-[14px] text-[#1A237E] whitespace-pre-line" style={{ fontFamily: 'Inter, sans-serif' }}>{tabContent[activeTab]}</p>
        </div>
        <button className="w-full h-[44px] bg-gradient-to-r from-[#1A237E] to-[#7E57C2] text-white rounded-lg hover:shadow-lg transition-all duration-300">
          Gerar Novo Conteúdo
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#E0E0E0]">
        <h3 className="text-[20px] font-bold text-[#1A237E] mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Performance Geral</h3>
        <div className="grid grid-cols-4 gap-5">
          {performanceData.map((item, index) => (
            <div key={index} className="p-5 border border-[#E0E0E0] rounded-xl hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}20` }}>
                <item.icon size={24} style={{ color: item.color }} />
              </div>
              <p className="text-[12px] text-[#757575] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</p>
              <p className="text-[24px] font-bold" style={{ fontFamily: 'Roboto, sans-serif', color: item.color }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
