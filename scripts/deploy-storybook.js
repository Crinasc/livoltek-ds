#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando deploy do Storybook...\n');

try {
  // 1. Build do Storybook
  console.log('📦 Fazendo build do Storybook...');
  execSync('npm run build-storybook', { stdio: 'inherit' });
  
  // 2. Verificar se o build foi criado
  const storybookPath = path.join(process.cwd(), 'storybook-static');
  if (!fs.existsSync(storybookPath)) {
    throw new Error('❌ Build do Storybook não foi criado!');
  }
  
  console.log('✅ Build do Storybook criado com sucesso!');
  console.log(`📁 Localização: ${storybookPath}\n`);
  
  // 3. Instruções para deploy
  console.log('🌐 Próximos passos para deploy:');
  console.log('');
  console.log('Opção 1 - Vercel:');
  console.log('  npx vercel --prod');
  console.log('');
  console.log('Opção 2 - Netlify:');
  console.log('  npx netlify-cli deploy --prod --dir=storybook-static');
  console.log('');
  console.log('Opção 3 - GitHub Pages:');
  console.log('  # Fazer upload da pasta storybook-static/ para GitHub Pages');
  console.log('');
  console.log('📚 Após o deploy, configure no Zeroheight:');
  console.log('  1. Acesse https://zeroheight.com');
  console.log('  2. Crie um novo projeto');
  console.log('  3. Conecte com a URL do Storybook');
  console.log('');
  
} catch (error) {
  console.error('❌ Erro durante o deploy:', error.message);
  process.exit(1);
}
