import Button from './Button';
import { Circle, ChevronDown } from 'lucide-react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Button seguindo padrões Tailwind CSS com suporte a ícones leading/trailing e diferentes tamanhos.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Variante visual do botão (primary/secondary conforme Figma)',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'disabled'],
      description: 'Estado visual do botão',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Tamanho do botão (sm/md não suportam ícones)',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Estado desabilitado do botão',
    },
    leadingIcon: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Ícone à esquerda (leading) - não funciona em sm/md',
    },
    trailingIcon: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Ícone à direita (trailing) - não funciona em sm/md',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      defaultValue: 'button',
      description: 'Tipo do botão HTML',
    },
    children: {
      control: { type: 'text' },
      description: 'Conteúdo do botão',
    },
  },
};

// Story principal - mostra o botão básico conforme Figma
export const Primary = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'lg', // Mudado para lg para permitir ícones
    children: 'Button',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
};

// Story para testar todos os tamanhos disponíveis no Figma
export const AllSizes = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'lg',
    children: 'Button',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="space-x-2 flex items-center">
        <Button {...args} size="sm">Small</Button>
        <Button {...args} size="md">Medium</Button>
        <Button {...args} size="lg">Large</Button>
        <Button {...args} size="xl">Extra Large</Button>
        <Button {...args} size="2xl">2X Large</Button>
      </div>
    </div>
  ),
};

// Story para testar os estados disponíveis no Figma
export const AllStates = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'lg',
    children: 'Button',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button {...args} state="default">Default</Button>
        <Button {...args} state="hover">Hover</Button>
        <Button {...args} state="disabled" disabled={true}>Disabled</Button>
      </div>
    </div>
  ),
};

// Story para demonstrar ícones (apenas em tamanhos lg+)
export const WithIcons = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'lg', // Usando lg para permitir ícones
    children: 'Button',
    disabled: false,
    leadingIcon: true,
    trailingIcon: true,
  },
};

// Story para testar controles interativos
export const Interactive = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'lg', // Usando lg para permitir ícones
    children: 'Test Button',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
};

// Story para testar todas as variantes do Figma
export const AllVariants = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'lg',
    children: 'Button',
    disabled: false,
    leadingIcon: false,
    trailingIcon: false,
  },
  render: (args) => (
    <div className="space-y-4">
      <div className="space-x-2 flex items-center">
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
      </div>
    </div>
  ),
};
