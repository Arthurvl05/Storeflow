# StoreFlow

Plataforma de e-commerce com dashboard completo, marketing com IA, gestão de produtos, pedidos e clientes.

## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v7
- Recharts
- Lucide React

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Credenciais de acesso

- Email: `user@example.com`
- Senha: `password`

## Como publicar

### Vercel (recomendado — gratuito)
1. Acesse [vercel.com](https://vercel.com) e crie uma conta
2. Instale o CLI: `npm i -g vercel`
3. Na pasta do projeto: `vercel`
4. Siga as instruções — o deploy é automático

### Netlify
1. Rode `npm run build`
2. Acesse [netlify.com](https://netlify.com)
3. Arraste a pasta `dist` para o painel do Netlify

### GitHub Pages
1. Adicione `base: '/nome-do-repo/'` no `vite.config.ts`
2. Rode `npm run build`
3. Faça push da pasta `dist` para a branch `gh-pages`
