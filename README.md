# BUMPI IMPORTS - E-commerce de Tecnologia Premium

Um protótipo de e-commerce moderno especializado em produtos Apple e áudio visual, desenvolvido com Next.js 14, TailwindCSS e Framer Motion.

## 🎨 Design

- **Tema**: Fundo preto (#000000) com cores primárias roxo (#810ffa) e roxo escuro (#2c0b57)
- **Estilo**: Clean, moderno e tecnológico
- **Gradientes**: Entre preto e as cores primárias para profundidade
- **Tipografia**: Inter (sem serifas, moderna e legível)
- **Animações**: Transições suaves com Framer Motion

## 🚀 Funcionalidades

### ✅ Páginas Implementadas

1. **Página Inicial**
   - Banner hero com gradiente e call-to-action
   - Seção de categorias
   - Produtos em destaque
   - Seção de CTA final

2. **Listagem de Produtos**
   - Grid/Lista de produtos com filtros
   - Busca por nome
   - Filtro por categoria
   - Ordenação (preço, nome, avaliação)
   - Visualização em grid ou lista

3. **Produto Individual**
   - Galeria de imagens com navegação
   - Informações detalhadas
   - Especificações técnicas
   - Controle de quantidade
   - Botões de ação (carrinho, wishlist, compartilhar)

4. **Carrinho de Compras**
   - Lista de produtos selecionados
   - Controle de quantidade
   - Resumo do pedido com desconto
   - Código promocional (use: BUMPI10)
   - Cálculo de frete

5. **Área Administrativa**
   - Login seguro (admin@bumpiimports.com / admin123)
   - Dashboard com estatísticas
   - Gerenciamento de produtos (CRUD)
   - Filtros e busca

## 🛠️ Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. **Clone o repositório**
```bash
cd /Users/guisilva19/Desktop/projetos/bumpi
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🎯 Rotas Disponíveis

- `/` - Página inicial (hero melhorado, sem seção de categorias)
- `/produtos` - Listagem de produtos
- `/produtos/[id]` - Página individual do produto
- `/carrinho` - Carrinho de compras
- `/conta` - Área da conta do usuário (login/registro)
- `/not-found` - Página 404 personalizada

## 🔐 Funcionalidades de Login

**Área do Cliente:**
- Login tradicional com email/senha
- Login com Google (simulado)
- Registro de nova conta
- Dashboard com abas: Perfil, Pedidos, Lista de Desejos, Endereços

**Código Promocional:**
- Cupom: `BUMPI10` (10% de desconto)

## 🎨 Paleta de Cores

```css
/* Cores Primárias */
--purple-primary: #810ffa
--purple-dark: #2c0b57
--black: #000000

/* Gradientes */
--gradient-primary: linear-gradient(135deg, #000000 0%, #810ffa 50%, #2c0b57 100%)
--gradient-dark: linear-gradient(135deg, #000000 0%, #2c0b57 100%)
--gradient-purple: linear-gradient(135deg, #810ffa 0%, #2c0b57 100%)
```

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## ✨ Animações

Todas as animações são implementadas com Framer Motion:
- **Fade in/out** - Elementos aparecem suavemente
- **Slide up/down** - Transições verticais
- **Scale on hover** - Efeitos de hover nos botões
- **Stagger** - Animações sequenciais em listas
- **Page transitions** - Transições entre páginas

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Cria build de produção
npm run start    # Executa build de produção
npm run lint     # Executa linter
```

## 📂 Estrutura do Projeto

```
/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz
│   ├── page.tsx           # Página inicial
│   ├── produtos/          # Páginas de produtos
│   ├── carrinho/          # Página do carrinho
│   └── admin/             # Área administrativa
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   └── Layout.tsx         # Layout principal
├── public/                # Arquivos estáticos
└── ...                    # Arquivos de configuração
```

## 🎪 Demonstração

O projeto inclui dados mockados para demonstração:
- 8 produtos de exemplo nas categorias iPhone, MacBook, iPad e Audio
- Imagens do Unsplash para demonstração
- Carrinho com 2 produtos pré-adicionados
- Dashboard administrativo com estatísticas

## 🚀 Deploy

Para fazer deploy em produção:

1. **Build do projeto**
```bash
npm run build
```

2. **Deploy na Vercel** (recomendado)
```bash
npm i -g vercel
vercel
```

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@bumpiimports.com
- Telefone: (11) 9999-9999

---

**BUMPI IMPORTS** - Tecnologia Premium ao Seu Alcance 🚀
