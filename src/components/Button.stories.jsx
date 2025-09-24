import Button from './Button';

// Ícones simples para demonstração
const CircleIcon = () => <span className="w-4 h-4 border-2 border-white rounded-full" />;
const ChevronIcon = () => <span className="w-4 h-4 border-r-2 border-b-2 border-white rotate-45" />;

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    iconLeft: {
      control: { type: 'boolean' },
    },
    iconRight: {
      control: { type: 'boolean' },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'md',
    children: 'Button',
  },
};

export const WithIcons = {
  args: {
    variant: 'primary',
    state: 'default',
    size: 'md',
    children: 'Button',
    iconLeft: <CircleIcon />,
    iconRight: <ChevronIcon />,
  },
};

export const AllSizes = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2 flex items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button size="2xl">2X Large</Button>
      </div>
    </div>
  ),
};

export const WithIconsAllSizes = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2 flex items-center">
        <Button size="sm" iconLeft={<CircleIcon />} iconRight={<ChevronIcon />}>Button</Button>
        <Button size="md" iconLeft={<CircleIcon />} iconRight={<ChevronIcon />}>Button</Button>
        <Button size="lg" iconLeft={<CircleIcon />} iconRight={<ChevronIcon />}>Button</Button>
        <Button size="xl" iconLeft={<CircleIcon />} iconRight={<ChevronIcon />}>Button</Button>
        <Button size="2xl" iconLeft={<CircleIcon />} iconRight={<ChevronIcon />}>Button</Button>
      </div>
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button variant="primary" state="default">Primary Default</Button>
        <Button variant="primary" state="hover">Primary Hover</Button>
        <Button variant="secondary" state="default">Secondary Default</Button>
        <Button variant="secondary" state="hover">Secondary Hover</Button>
      </div>
      <div className="space-x-2">
        <Button variant="primary" disabled>Disabled Primary</Button>
        <Button variant="secondary" disabled>Disabled Secondary</Button>
      </div>
    </div>
  ),
};
