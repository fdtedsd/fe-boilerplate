# 🚀 FDTE Boilerplate - Frontend

Este repositório contém **dois boilerplates completos** para desenvolvimento frontend moderno, ambos com as mesmas funcionalidades e configurações de qualidade.

## 📁 Estrutura do Projeto

```
boilerplate/
├── React/          # Boilerplate usando Vite + React
└── Next/           # Boilerplate usando Next.js
```

## 🎯 Qual Escolher?

### 🔥 **React/** - Vite + React 19

**Ideal para:**

- Aplicações SPA (Single Page Application)
- Projetos que precisam de máxima flexibilidade
- Desenvolvimento rápido com Hot Module Replacement
- Aplicações que não precisam de SSR

### ⚡ **Next/** - Next.js 15

**Ideal para:**

- Aplicações full-stack
- SEO importante (SSR/SSG)
- Aplicações com rotas complexas
- Projetos que crescerão em escala

## ✨ Ambos Incluem

### 🛠️ **Stack Tecnológica**

- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos
- **React Hook Form + Zod** - Formulários e validação
- **Jotai** - Gerenciamento de estado
- **i18next** - Internacionalização (PT/EN/ES)
- **Testing Library** - Testes de componentes

### 🎨 **Funcionalidades Prontas**

- ✅ Tema claro/escuro automático
- ✅ Sistema de traduções completo
- ✅ Formulários com validação robusta
- ✅ Gerenciamento de estado reativo
- ✅ Componentes UI responsivos
- ✅ Testes configurados

### 🔧 **Qualidade de Código**

- ✅ **ESLint + Prettier** - Linting rigoroso
- ✅ **Husky** - Git hooks automáticos
- ✅ **EditorConfig** - Padrões de editor
- ✅ **VS Code Settings** - Formatação obrigatória
- ✅ **TypeScript** - Tipagem completa

## 🚀 Como Usar

### 1️⃣ **Escolha seu template:**

**Para React + Vite:**

```bash
cd React/
npm install
npm run dev
```

**Para Next.js:**

```bash
cd Next/
npm install
npm run dev
```

### 2️⃣ **Leia a documentação específica:**

- 📖 [React/README.md](./React/README.md) - Documentação do Vite + React
- 📖 [Next/README.md](./Next/README.md) - Documentação do Next.js

### 3️⃣ **Copie para seu projeto:**

```bash
# Copie o diretório escolhido para seu novo projeto
cp -r React/ meu-novo-projeto/
# ou
cp -r Next/ meu-novo-projeto/

cd meu-novo-projeto/
# Remova o .git se existir e inicialize o seu
rm -rf .git
git init
```

## 📋 Pré-requisitos

- **Node.js 22+** (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- **npm** ou **yarn** ou **pnpm**
- **VS Code** (recomendado para aproveitar as configurações)

### 🔑 Extensões VS Code Recomendadas

- ESLint
- Prettier
- TypeScript Importer
- Tailwind CSS IntelliSense
- Auto Rename Tag

## 🎯 Próximos Passos

Após escolher e copiar o template:

1. **Personalize o `package.json`** com nome e descrição do seu projeto
2. **Configure variáveis de ambiente** se necessário
3. **Ajuste as traduções** em `src/locales/`
4. **Customize o tema** em `globals.css`
5. **Comece a desenvolver!** 🎉

## 📖 Documentação Adicional

- 📚 [Integração shadcn/ui](./React/INTEGRAÇÃO_SHADCN.md) ou [Next](./Next/INTEGRAÇÃO_SHADCN.md)
- 🔍 [Exemplos de Validação](./React/VALIDAÇÃO_EXEMPLO.md) ou [Next](./Next/VALIDAÇÃO_EXEMPLO.md)

---

**💡 Dica:** Ambos os templates são funcionalmente idênticos. A escolha depende apenas da arquitetura que melhor se adequa ao seu projeto.

Desenvolvido com ❤️ para acelerar o desenvolvimento frontend moderno.
