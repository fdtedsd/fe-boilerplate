# Sistema de Design Tokens

Este projeto implementa um sistema flexível de design tokens que permite sobrepor os valores padrão do Tailwind CSS através de arquivos JSON.

## 📋 Funcionalidades

- ✅ **Tokens Dinâmicos**: Altere cores, espaçamentos e tipografia em tempo real
- ✅ **Override por JSON**: Carregue configurações personalizadas de arquivos JSON
- ✅ **Temas Pré-definidos**: Troque entre diferentes paletas de cores
- ✅ **Compatibilidade Tailwind**: Funciona com todas as classes utilitárias do Tailwind
- ✅ **TypeScript**: Tipagem completa para segurança de tipos
- ✅ **Modo Claro/Escuro**: Suporte nativo para temas light e dark

## 🚀 Como Usar

### 1. Configuração Básica

O sistema está configurado automaticamente no projeto. Os tokens padrão estão em `design-tokens.json`.

### 2. Usando o Hook

```tsx
import { useDesignTokens } from '../components/DesignTokenProvider';

function MeuComponente() {
  const { overrides, setOverrides } = useDesignTokens();

  // Alterar cores programaticamente
  const mudarTema = () => {
    setOverrides({
      colors: {
        light: {
          primary: 'oklch(0.5 0.3 120)', // Verde
        },
      },
    });
  };

  return <button onClick={mudarTema}>Mudar para Verde</button>;
}
```

### 3. Arquivo JSON Customizado

Crie um arquivo JSON com as suas customizações:

```json
{
  "colors": {
    "light": {
      "primary": "#3b82f6",
      "accent": "hsl(210, 40%, 95%)"
    },
    "dark": {
      "primary": "#60a5fa",
      "accent": "#334155"
    }
  },
  "spacing": {
    "radius": "1.5rem"
  }
}
```

### 4. Carregando JSON Externo

```tsx
import { useDesignTokens } from '../components/DesignTokenProvider';

function CarregarTema() {
  const { loadTokensFromFile } = useDesignTokens();

  return (
    <button onClick={() => loadTokensFromFile('/meu-tema.json')}>
      Carregar Tema Personalizado
    </button>
  );
}
```

## 📚 Estrutura dos Tokens

### Cores

Todas as cores aceitas são compatíveis com CSS:

- `background`: Cor de fundo principal
- `foreground`: Cor do texto principal
- `primary`: Cor primária da marca
- `primary-foreground`: Texto sobre cor primária
- `secondary`: Cor secundária
- `secondary-foreground`: Texto sobre cor secundária
- `accent`: Cor de destaque
- `accent-foreground`: Texto sobre cor de destaque
- `destructive`: Cor para ações destrutivas
- `border`: Cor das bordas
- `input`: Cor de fundo dos inputs
- `ring`: Cor do focus ring

### Formatos de Cor Aceitos

```json
{
  "colors": {
    "light": {
      "primary": "#3b82f6", // HEX
      "secondary": "rgb(59, 130, 246)", // RGB
      "accent": "hsl(217, 91%, 60%)", // HSL
      "muted": "oklch(0.97 0 0)", // OKLCH
      "background": "white", // Nomes CSS
      "destructive": "rgba(239, 68, 68, 0.9)" // RGBA
    }
  }
}
```

### Espaçamento

- `radius`: Border radius base (outras variações são calculadas automaticamente)

### Tipografia

- `font-family`: Famílias de fontes
- `font-size`: Tamanhos de fonte

## 🛠️ Casos de Uso

### 1. White Label / Multi-tenant

```tsx
// Carregar tema baseado no cliente
useEffect(() => {
  const clientId = getClientId();
  loadTokensFromFile(`/themes/${clientId}.json`);
}, []);
```

### 2. A/B Testing de Temas

```tsx
const temaA = { colors: { light: { primary: '#3b82f6' } } };
const temaB = { colors: { light: { primary: '#10b981' } } };

// Aplicar baseado no grupo do usuário
setOverrides(userGroup === 'A' ? temaA : temaB);
```

### 3. Preferências do Usuário

```tsx
// Salvar/carregar preferências
const salvarPreferencias = () => {
  localStorage.setItem('design-tokens', JSON.stringify(overrides));
};

const carregarPreferencias = () => {
  const saved = localStorage.getItem('design-tokens');
  if (saved) setOverrides(JSON.parse(saved));
};
```

## 🔧 Desenvolvimento

### Adicionando Novos Tokens

1. Atualize `design-tokens.json` com os novos valores
2. Modifique a interface `DesignTokens` em `design-tokens.ts`
3. Atualize a função `generateCustomCSS` se necessário
4. Adicione as novas variáveis CSS no `@theme inline` do `index.css`

### Debugging

Use o componente `DesignTokensDemo` para visualizar e testar mudanças em tempo real.

## 📖 Exemplos

Veja `DesignTokensDemo.tsx` para exemplos completos de implementação.

Arquivo de exemplo: `public/custom-theme-example.json`
