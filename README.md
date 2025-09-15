# Livoltek Design System

Um Design System moderno e acessível construído com Vue 3, Vite, Tailwind CSS e Storybook.

## 🚀 Características

- **Vue 3** com Composition API
- **Tailwind CSS** para estilização
- **Storybook** para documentação de componentes
- **TypeScript** pronto para uso
- **Acessibilidade** integrada
- **Responsivo** por padrão

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Instalar dependências de desenvolvimento
npm install --save-dev
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Iniciar Storybook
npm run storybook
```

### Produção
```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

### Qualidade de Código
```bash
# Linting
npm run lint

# Formatação
npm run format
```

## 📚 Como Usar os Componentes

### Importação
```javascript
import { Button } from 'livoltek-ds'

// Ou importação individual
import Button from 'livoltek-ds/src/components/Button.vue'
```

### Uso Básico
```vue
<template>
  <Button 
    label="Clique aqui" 
    variant="primary" 
    size="medium" 
    @click="handleClick" 
  />
</template>

<script setup>
import { Button } from 'livoltek-ds'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## 🎨 Componentes Disponíveis

### Button
Componente de botão com múltiplas variantes e tamanhos.

**Props:**
- `label` (String): Texto do botão
- `variant` (String): 'primary' | 'secondary'
- `size` (String): 'small' | 'medium' | 'large'
- `disabled` (Boolean): Estado desabilitado

**Exemplo:**
```vue
<Button 
  label="Botão Primário" 
  variant="primary" 
  size="large" 
/>
```

## 🎯 Storybook

Acesse a documentação interativa dos componentes:

```bash
npm run storybook
```

Abra [http://localhost:6006](http://localhost:6006) no seu navegador.

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes do Design System
│   ├── Button.vue      # Componente Button
│   └── Button.stories.js # Stories do Button
├── assets/             # Recursos estáticos
│   └── css/
│       └── tailwind.css # Estilos Tailwind
├── main.js             # Ponto de entrada
└── index.js            # Exports dos componentes
```

## 🎨 Design Tokens

O Design System utiliza Tailwind CSS com configurações customizadas:

- **Cores**: Paleta consistente e acessível
- **Tipografia**: Escalas responsivas
- **Espaçamento**: Sistema de grid 8px
- **Bordas**: Raio consistente
- **Sombras**: Elevação sutil

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [Vue 3 Documentation](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://vitejs.dev/)
