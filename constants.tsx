import { 
  UserCheck, 
  Wifi, 
  Send, 
  BadgeDollarSign, 
  MessageCircle, 
  Truck, 
  ListOrdered, 
  CalendarCheck,
  Smartphone,
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { FeatureItem, ComparisonRow, StepItem, BenefitItem } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 'checkin',
    title: 'Check-in de Clube',
    description: [
      'Coleta dados básicos: Nome, Telefone e Cota.',
      'Validação em 2 etapas para segurança.',
      'Ideal para controle de acesso em clubes.'
    ],
    icon: UserCheck
  },
  {
    id: 'wifi',
    title: 'Promoções + Wi-Fi',
    description: [
      'Leitura de QR-Code para retirar promoção.',
      'Liberação de Wi-Fi após check-in.',
      'Marketing promocional com benefício imediato.'
    ],
    icon: Wifi
  },
  {
    id: 'promo',
    title: 'Envio de Promoções',
    description: [
      'Disparo de campanhas para base cadastrada.',
      'Comunicação segmentada via WhatsApp.',
      'Aumento de engajamento e vendas.'
    ],
    icon: Send
  },
  {
    id: 'pix',
    title: 'PIX via WhatsApp',
    description: [
      'Pagamento instantâneo integrado.',
      'Transação direta na conversa.',
      'Reduz barreiras de compra.'
    ],
    icon: BadgeDollarSign
  },
  {
    id: 'chat',
    title: 'QR-Code para Conversa',
    description: [
      'Direciona cliente para o WhatsApp da empresa.',
      'Sem necessidade de salvar número.',
      'Contato facilitado e imediato.'
    ],
    icon: MessageCircle
  },
  {
    id: 'delivery',
    title: 'Integração Delivery',
    description: [
      'Avisos automáticos de retirada e entrega.',
      'Cliente informado em tempo real.',
      'Maior confiança e satisfação.'
    ],
    icon: Truck
  },
  {
    id: 'queue',
    title: 'Painel de Senha',
    description: [
      'Substitui painéis físicos.',
      'Notificação direta no WhatsApp.',
      'Redução de filas e melhor organização.'
    ],
    icon: ListOrdered
  },
  {
    id: 'events',
    title: 'Gestão em Eventos',
    description: [
      'Pedidos via cardápio digital.',
      'Aviso automático para busca.',
      'Automatiza fluxo e reduz espera.'
    ],
    icon: CalendarCheck
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  { feature: 'Check-in de Clube', clientImpact: 'Segurança no acesso e participação garantida', companyImpact: 'Controle eficiente de membros e cotas' },
  { feature: 'Promoções + Wi-Fi', clientImpact: 'Ofertas personalizadas e internet grátis', companyImpact: 'Aumenta captação de leads e engajamento' },
  { feature: 'Envio de Promoções', clientImpact: 'Recebimento de ofertas exclusivas', companyImpact: 'Facilita campanhas e fidelização' },
  { feature: 'Pagamento via PIX', clientImpact: 'Rápido e prático sem sair do app', companyImpact: 'Acelera vendas e reduz barreiras' },
  { feature: 'QR-Code para Conversa', clientImpact: 'Contato direto sem salvar número', companyImpact: 'Simplifica atendimento e gera leads' },
  { feature: 'Delivery / Eventos', clientImpact: 'Acompanhamento em tempo real', companyImpact: 'Organização e redução de filas' },
];

export const JOURNEY_STEPS: StepItem[] = [
  { title: 'Chegada', description: 'João chega ao evento e escaneia o QR Code.', icon: Smartphone },
  { title: 'Check-in', description: 'Preenche nome/telefone e valida via WhatsApp.', icon: UserCheck },
  { title: 'Wi-Fi & Oferta', description: 'Ganha 10% de desconto e acesso à internet.', icon: Wifi },
  { title: 'Pedido', description: 'Faz o pedido pelo cardápio digital.', icon: ListOrdered },
  { title: 'Pagamento', description: 'Paga via PIX direto na conversa.', icon: BadgeDollarSign },
  { title: 'Notificação', description: 'Recebe mensagem quando o pedido está pronto.', icon: MessageCircle },
];

export const GENERAL_BENEFITS: BenefitItem[] = [
  { title: 'Conveniência', description: 'Tudo acontece no aplicativo que o cliente já usa: o WhatsApp.' },
  { title: 'Automação', description: 'Menos trabalho manual para sua equipe, mais eficiência operacional.' },
  { title: 'Fidelização', description: 'Crie um canal direto para futuras ofertas e relacionamento.' }
];