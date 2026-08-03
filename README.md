# Site Vidraçaria — template multi-cliente

Template Next.js para demos de vidraçarias. Mesmo layout; cada cliente muda só pela config + variável de ambiente na Vercel.

## Clientes disponíveis

| `NEXT_PUBLIC_CLIENT` | Nome no site |
|----------------------|--------------|
| `arteflex` | Arteflex (dados reais) |
| `freitas` | Vidraçaria Freitas |
| `cooper-vidros` | Cooper Vidros |
| `classic-vidros` | Classic Vidros |
| `mold-vidros` | Mold Vidros |

Demos (exceto Arteflex): telefone `(99) 9 9999-9999`, imagens e textos padrão — só o nome muda.

Configs em `src/lib/clients/`.

## Desenvolvimento local

```bash
npm install
cp .env.example .env.local   # se ainda não existir
# edite NEXT_PUBLIC_CLIENT=freitas (ou outro)
npm run dev
```

## Deploy na Vercel (um link por cliente)

Para cada cliente, crie um **projeto separado** no mesmo repositório:

1. [vercel.com/new](https://vercel.com/new) → importe o repo
2. Nome do projeto, ex: `vidracaria-freitas`
3. **Environment Variables:**
   - `NEXT_PUBLIC_CLIENT` = `freitas` (ou o id do cliente)
4. Deploy

Repita para `cooper-vidros`, `classic-vidros`, `mold-vidros`, `arteflex`.

Cada projeto gera um link próprio (ex: `vidracaria-freitas.vercel.app`).

## Novo cliente

1. Crie `src/lib/clients/novo-cliente.ts` com `createDemoClient("novo-cliente", "Nome Fantasia")`
2. Registre em `src/lib/clients/index.ts`
3. Na Vercel: novo projeto + `NEXT_PUBLIC_CLIENT=novo-cliente`

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Deploy na Vercel
