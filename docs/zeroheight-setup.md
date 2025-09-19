# Configuração Zeroheight

## Como conectar o Design System ao Zeroheight

### 1. Preparar o Storybook para Produção

```bash
# Build do Storybook
npm run build-storybook

# O Storybook será gerado na pasta storybook-static/
```

### 2. Deploy do Storybook

#### Opção A: Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Opção B: Netlify
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=storybook-static
```

#### Opção C: GitHub Pages
```bash
# Adicionar ao package.json
"homepage": "https://seuusuario.github.io/livoltek-ds"

# Deploy
npm run build-storybook
# Fazer upload da pasta storybook-static/ para GitHub Pages
```

### 3. Configurar no Zeroheight

1. **Acesse**: [zeroheight.com](https://zeroheight.com)
2. **Crie um novo projeto**: "Livoltek Design System"
3. **Conecte o Storybook**:
   - URL: `https://seu-storybook-url.com`
   - Token: (se necessário)

### 4. Estrutura de Documentação

```
zeroheight/
├── Introduction/
│   ├── Getting Started
│   ├── Design Principles
│   └── Installation
├── Design Tokens/
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Border Radius
├── Components/
│   ├── Button
│   ├── Input
│   └── Login
└── Guidelines/
    ├── Usage
    ├── Accessibility
    └── Best Practices
```

### 5. URLs Importantes

- **Storybook Local**: http://localhost:6006
- **Storybook Produção**: (após deploy)
- **Zeroheight**: (após configuração)

### 6. Atualizações Automáticas

Para sincronizar automaticamente com o Zeroheight:

1. Configure webhooks no repositório GitHub
2. Configure CI/CD para build automático do Storybook
3. Use a API do Zeroheight para atualizações automáticas

### 7. Próximos Passos

- [ ] Fazer deploy do Storybook
- [ ] Configurar no Zeroheight
- [ ] Adicionar mais componentes
- [ ] Configurar CI/CD
- [ ] Adicionar testes automatizados
