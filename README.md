# Site Vidraçaria — template multi-cliente

Template Next.js para demos de vidraçarias. Mesmo layout; cada cliente muda só pela config + variável de ambiente na Vercel.

## Clientes disponíveis

### Base
| `NEXT_PUBLIC_CLIENT` | Nome no site |
|----------------------|--------------|
| `arteflex` | Arteflex (dados reais) |
| `freitas` | Vidraçaria Freitas |
| `cooper-vidros` | Cooper Vidros |
| `classic-vidros` | Classic Vidros |
| `mold-vidros` | Mold Vidros |

### Prospects
| `NEXT_PUBLIC_CLIENT` | Nome no site |
|----------------------|--------------|
| `manaus-vidros-e-aluminio` | Manaus Vidros e Alumínio |
| `dois-irmaos-jp` | Vidraçaria Dois Irmãos JP |
| `mangueira-pimenta-vidros` | Mangueira Pimenta Vidros |
| `box-metal` | Vidraçaria Box Metal |
| `brandao` | Vidraçaria Brandão |
| `amazon-box` | Vidraçaria Amazon Box |
| `vidro-sam` | Vidro Sam e Instalações |
| `vidracaria-nova` | Vidraçaria Nova |
| `vidroluxo` | Vidraçaria Vidroluxo |
| `bv-vidracaria` | BV Vidraçaria |
| `jc-box` | JC Box e Vidraçaria |
| `viana` | Vidraçaria Viana |
| `efama` | Efama Metalúrgica e Vidraçaria |
| `vidro-haus` | Vidro Haus Vidraçaria |
| `avenida-vidracaria` | Avenida Vidraçaria |
| `mundial-vidros-betania` | Mundial Vidros Betania |
| `manaus-vidros` | Manaus Vidros |
| `gm-vidros` | GM Vidros e Ferragens |

Demos (exceto Arteflex): telefone `(99) 9 9999-9999`, imagens e textos padrão — só o nome muda.

Configs em `src/lib/clients/` (`prospects.ts` para a lista acima).

## Desenvolvimento local

```bash
npm install
cp .env.example .env.local   # se ainda não existir
# edite NEXT_PUBLIC_CLIENT=vidroluxo (ou outro)
npm run dev
```

## Deploy na Vercel (um link por cliente)

Para cada cliente, crie um **projeto separado** no mesmo repositório:

1. [vercel.com/new](https://vercel.com/new) → importe o repo
2. Nome do projeto, ex: `vidracaria-vidroluxo`
3. **Environment Variables:**
   - `NEXT_PUBLIC_CLIENT` = `vidroluxo` (ou o id do cliente)
4. Deploy

Cada projeto gera um link próprio (ex: `vidracaria-vidroluxo.vercel.app`).

## Novo cliente

1. Em `src/lib/clients/prospects.ts`, adicione:
   `createDemoClient("id-do-cliente", "Nome Fantasia")`
2. Na Vercel: novo projeto + `NEXT_PUBLIC_CLIENT=id-do-cliente`

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel Analytics + Speed Insights
