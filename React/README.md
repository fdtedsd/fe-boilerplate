# Boilerplate Frontend – Vite e React 19

Seja bem-vindo ao nosso boilerplate frontend! 🎉  
Este projeto foi criado para acelerar o desenvolvimento utilizando uma stack moderna, leve e flexível.

A base tecnológica inclui **Vite** como bundler, **React 19** para a construção de interfaces e **TypeScript** para garantir a segurança do tipo em todo o projeto. O **SWC** cuida da transformação do código para garantir builds extremamente rápidos.

---

## 🧠 Sobre o projeto

Este boilerplate traz uma configuração inicial robusta, com tudo que você precisa para começar de forma prática e padronizada:

- **Organização de traduções** com [i18Next](https://www.i18next.com/) para suporte a múltiplas linguagens.
- **Padrão de UI** utilizando [shadcn/ui](https://ui.shadcn.com/docs) junto ao [TailwindCSS](https://tailwindcss.com/).  
  _(Devido as atuais versões o `shadcn/ui` abre umas opções no cli ao adicionar um novo component, pode optar a opção force, durante os testes não obtivemos problemas)_
- **Pré-configurações**
- Ambiente de desenvolvimento seguro com **HTTPS local**, utilizando certificados `.pem` já incluídos.
- Ambiente de testes configurado com [Vitest](https://vitest.dev/) e [React Testing Library](https://testing-library.com/).
- [**Husky**](https://typicode.github.io/husky/) configurado para:
  - Rodar o lint automaticamente antes do commit.
  - Impedir commits sem assinatura GPG, garantindo mais segurança no repositório.
- Configurações de **eslint** e **prettier** já aplicadas para manter a qualidade e consistência do código.

---

## 🛠 Antes de começar

Alguns passos são essenciais antes de colocar a mão na massa:

1. **Node.js versão 22** é obrigatória.  
   Se precisar gerenciar múltiplas versões, recomendamos usar o [nvm](https://github.com/nvm-sh/nvm).

2. **Crie sua chave GPG** (se ainda não tiver) e configure no seu Git local e no GitHub.  
   👉 Veja como gerar uma chave:  
   [Guia oficial - Gerar chave GPG](https://docs.github.com/pt/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)

3. **Configure seu ambiente**:

   - Copie o arquivo `.env.example` para `.env`:
     ```bash
     $ cp .env.example .env
     ```

4. **Instale as dependências**:

   ```bash
   $ npm install
   ```

5. **Rodando a aplicação**:
   - Para desenvolvimento local, utilize:
     ```bash
     $ npm run dev
     ```
   - Para construir a aplicação para produção:
     ```bash
     $ npm run build
     $ npm run preview
     ```

---

---

## 📚 Padrões e boas práticas

Para garantir que todos os módulos mantenham a mesma qualidade:

- Utilize **React Hook Form** ([documentação](https://react-hook-form.com/)) junto com **Zod** ([documentação](https://zod.dev/)) para formulários e validações.
- Utilize **date-fns** ([documentação](https://date-fns.org/)) para qualquer manipulação de datas.
- **Não faça chamadas diretas** de API!  
  Toda comunicação com backend deve passar pelo **SDK interno**, utilizando **GraphQL**.
- **Metrifique e escreva testes** para tudo o que for implementado _(não esqueça de contar com os testes na hora de estimar o esforço da tarefa)_.

---

## ⚡ Atenção redobrada

- Você **não poderá** commitar sem uma chave GPG válida.
- A padronização no estilo de código é obrigatória; o ESLint e Prettier vão bloquear commits fora do padrão.
- Se encontrar qualquer necessidade de melhoria, **abra uma thread de discussão no `#chapter-frontend`**.

---

## 🔗 Links úteis

- [Documentação Vite](https://vitejs.dev/guide/)
- [Documentação React](https://react.dev/learn)
- [Documentação i18Next](https://www.i18next.com/)
- [Documentação Shadcn UI](https://ui.shadcn.com/docs/installation)
- [Documentação TailwindCSS](https://tailwindcss.com/docs)
- [Documentação Husky](https://typicode.github.io/husky/#/)
- [Guia oficial - Gerar chave GPG (GitHub)](https://docs.github.com/pt/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
- [Documentação GraphQL](https://graphql.org/learn/)

---

# 🚀 Bora codar!
