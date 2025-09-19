// Configuração para Zeroheight
export default {
  // URL do Storybook (será atualizada quando estiver em produção)
  storybookUrl: 'http://localhost:6006',
  
  // Configurações do Design System
  designSystem: {
    name: 'Livoltek Design System',
    version: '1.0.0',
    description: 'Sistema de design da Livoltek com componentes React e Tailwind CSS',
    
    // Tokens de design
    tokens: {
      colors: {
        primary: '#6366f1',
        'primary-hover': '#4f46e5',
        secondary: '#ebebeb',
        'secondary-hover': '#d7d7d7',
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      typography: {
        fontFamily: 'Inter',
        fontSize: {
          base: '16px',
          sm: '14px',
          lg: '18px',
          xl: '20px',
          '2xl': '24px',
          '3xl': '30px',
          '4xl': '36px'
        }
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px'
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px'
      }
    },
    
    // Componentes
    components: [
      {
        name: 'Button',
        category: 'Actions',
        description: 'Botões primários e secundários',
        variants: ['primary', 'secondary'],
        states: ['default', 'hover', 'disabled']
      },
      {
        name: 'Input',
        category: 'Forms',
        description: 'Campos de entrada de texto',
        types: ['text', 'password', 'email']
      },
      {
        name: 'Login',
        category: 'Pages',
        description: 'Página de login completa'
      }
    ]
  }
};
