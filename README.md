# Arteflex — Site institucional

Proposta moderna e responsiva para a Arteflex (Manaus): vidros Blindex®, divisórias, persianas e toldos. Pronta para deploy na Vercel.

Base de conteúdo: [arteflexprojetos.com](https://www.arteflexprojetos.com/)

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4**
- **Framer Motion** (animações leves)
- **Lucide React** (ícones)
- Otimizado para **Vercel** (SSG das páginas de serviço)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba o repositório no GitHub/GitLab/Bitbucket
2. Importe o projeto em [vercel.com/new](https://vercel.com/new)
3. Framework: **Next.js** (detectado automaticamente)
4. Deploy — sem variáveis de ambiente obrigatórias

Ou via CLI:

```bash
npx vercel
```

## Contato no site

- WhatsApp: `(92) 99265-2113`
- E-mails e endereço conforme o site atual da Arteflex

Para alterar dados, edite `src/lib/site.ts`.

## Estrutura

- `/` — home (hero, serviços, sobre, Blindex, CTA)
- `/servicos/[slug]` — páginas de cada solução
- `/contato` — telefone, e-mails, mapa e WhatsApp
