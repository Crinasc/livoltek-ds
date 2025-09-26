import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_ID = 'axxySxvdMc6eGq9hEM7ilm';

async function fetchFigmaTokens() {
  if (!FIGMA_TOKEN) {
    console.error('❌ FIGMA_ACCESS_TOKEN não encontrado no .env.local');
    console.log('💡 Configure o token no arquivo .env.local');
    process.exit(1);
  }

  try {
    console.log('🔄 Buscando arquivo do Figma...');
    
    const response = await fetch(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
      {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Erro na API do Figma: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Arquivo do Figma carregado com sucesso!');

    // Extrair tokens de design reais
    const tokens = await extractDesignTokens(data);
    console.log('📊 Tokens extraídos:', Object.keys(tokens));

    // Salvar tokens
    await saveTokens(tokens);
    console.log('✅ Tokens sincronizados com sucesso!');
    
    return tokens;
  } catch (error) {
    console.error('❌ Erro ao sincronizar:', error.message);
    process.exit(1);
  }
}

async function extractDesignTokens(figmaData) {
  console.log('🔍 Extraindo tokens do Figma...');
  
  const tokens = {
    colors: {},
    typography: {},
    spacing: {},
    borderRadius: {},
    shadows: {},
    components: {}
  };

  // Função para extrair cores
  function extractColors(node) {
    if (node.fills && Array.isArray(node.fills)) {
      node.fills.forEach(fill => {
        if (fill.type === 'SOLID' && fill.color) {
          const color = fill.color;
          const hex = rgbToHex(color.r, color.g, color.b);
          
          const nodeName = node.name?.toLowerCase() || '';
          
          if (nodeName.includes('primary')) {
            tokens.colors.primary = tokens.colors.primary || {};
            tokens.colors.primary[getColorShade(color)] = hex;
          } else if (nodeName.includes('secondary')) {
            tokens.colors.secondary = tokens.colors.secondary || {};
            tokens.colors.secondary[getColorShade(color)] = hex;
          } else if (nodeName.includes('neutral') || nodeName.includes('gray')) {
            tokens.colors.neutral = tokens.colors.neutral || {};
            tokens.colors.neutral[getColorShade(color)] = hex;
          }
        }
      });
    }
  }

  // Função para extrair tipografia
  function extractTypography(node) {
    if (node.style) {
      const style = node.style;
      const fontSize = Math.round(style.fontSize || 0);
      const fontWeight = getFontWeight(style.fontWeight);
      
      if (fontSize > 0) {
        tokens.typography[`text-${fontSize}`] = {
          fontSize: `${fontSize}px`,
          fontWeight: fontWeight,
          lineHeight: style.lineHeightPx ? `${style.lineHeightPx}px` : 'normal',
          letterSpacing: style.letterSpacing ? `${style.letterSpacing}px` : '0px'
        };
      }
    }
  }

  // Função para extrair espaçamentos
  function extractSpacing(node) {
    if (node.absoluteBoundingBox) {
      const { width, height } = node.absoluteBoundingBox;
      
      if (width > 0 && height > 0) {
        const size = Math.round(Math.min(width, height));
        if (size <= 100) {
          tokens.spacing[`${size}`] = `${size}px`;
        }
      }
    }
  }

  // Função para extrair border radius
  function extractBorderRadius(node) {
    if (node.cornerRadius !== undefined) {
      const radius = Math.round(node.cornerRadius);
      if (radius > 0) {
        tokens.borderRadius[`${radius}`] = `${radius}px`;
      }
    }
  }

  // Função para extrair componentes
  function extractComponents(node) {
    if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
      const componentName = node.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown';
      
      tokens.components[componentName] = {
        width: node.absoluteBoundingBox?.width || 0,
        height: node.absoluteBoundingBox?.height || 0,
        cornerRadius: node.cornerRadius || 0,
        fills: node.fills || [],
        effects: node.effects || []
      };
    }
  }

  // Função recursiva para percorrer todos os nós
  function traverseNode(node) {
    if (!node) return;

    extractColors(node);
    extractTypography(node);
    extractSpacing(node);
    extractBorderRadius(node);
    extractComponents(node);

    if (node.children) {
      node.children.forEach(traverseNode);
    }
  }

  // Percorrer todos os nós do documento
  if (figmaData.document) {
    traverseNode(figmaData.document);
  }

  // Adicionar tokens padrão se não encontrados
  if (Object.keys(tokens.colors).length === 0) {
    tokens.colors = {
      primary: {
        '500': '#1d4ed8',
        '600': '#1e40af',
        '700': '#1e3a8a'
      },
      neutral: {
        '200': '#e5e5e5',
        '400': '#a3a3a3',
        '800': '#262626'
      }
    };
  }

  if (Object.keys(tokens.typography).length === 0) {
    tokens.typography = {
      'text-sm': {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '20px'
      }
    };
  }

  if (Object.keys(tokens.spacing).length === 0) {
    tokens.spacing = {
      '8': '8px',
      '10': '10px',
      '14': '14px'
    };
  }

  if (Object.keys(tokens.borderRadius).length === 0) {
    tokens.borderRadius = {
      '6': '6px'
    };
  }

  return tokens;
}

// Funções auxiliares
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getColorShade(color) {
  const brightness = (color.r + color.g + color.b) / 3;
  if (brightness > 0.8) return '50';
  if (brightness > 0.6) return '100';
  if (brightness > 0.4) return '500';
  if (brightness > 0.2) return '600';
  return '700';
}

function getFontWeight(weight) {
  const weights = {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900'
  };
  return weights[weight] || '400';
}

async function saveTokens(tokens) {
  const outputPath = path.join(__dirname, '../src/tokens/design-tokens.json');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(tokens, null, 2));
  console.log('💾 Tokens salvos em src/tokens/design-tokens.json');
}

// Executar se chamado diretamente
fetchFigmaTokens();

export { fetchFigmaTokens, extractDesignTokens };
