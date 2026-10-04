# Site multi-nicho

Template Next.js para demos por nicho. Mesmo layout; cada nicho muda mídia, serviços e textos pela config + variável de ambiente.

## Nichos disponíveis

| `NEXT_PUBLIC_CLIENT` | Nome no site |
|----------------------|--------------|
| `advogados` | Vértice Advogados |
| `moveis-planejados` | Habitare Planejados |
| `clinica-estetica` | Lumina Estética |
| `fonoaudiologia` | VivaVoz |

Configs em `src/lib/niches/`. Contato demo: telefone `(99) 9 9999-9999`.

## Desenvolvimento local

```bash
npm install
cp .env.example .env.local   # se ainda não existir
# edite NEXT_PUBLIC_CLIENT=advogados (ou outro nicho)
npm run dev
```

## Deploy na Vercel (um link por nicho)

Para cada nicho, crie um **projeto separado** no mesmo repositório:

1. [vercel.com/new](https://vercel.com/new) → importe o repo
2. Nome do projeto, ex: `nicho-advogados`
3. **Environment Variables:**
   - `NEXT_PUBLIC_CLIENT` = `advogados` (ou o id do nicho)
4. Deploy

Cada projeto gera um link próprio.

## Novo nicho

1. Crie `src/lib/niches/seu-nicho.ts` com a estrutura de `NicheConfig` (veja `advogados.ts`)
2. Registre em `src/lib/niches/index.ts`
3. Na Vercel: novo projeto + `NEXT_PUBLIC_CLIENT=seu-nicho`

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel Analytics + Speed Insights
