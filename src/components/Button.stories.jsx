import Button from './Button';
import { Circle, ChevronDown } from 'lucide-react';

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
    iconLeft: <Circle className="w-4 h-4" />,
    iconRight: <ChevronDown className="w-4 h-4" />,
  },
};

export const IconsOnly = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2 flex items-center">
        <Button variant="primary" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
        <Button variant="primary" iconLeft={<Circle className="w-4 h-4" />}>Left Icon</Button>
        <Button variant="primary" iconRight={<ChevronDown className="w-4 h-4" />}>Right Icon</Button>
      </div>
      <div className="space-x-2 flex items-center">
        <Button variant="secondary" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
        <Button variant="secondary" iconLeft={<Circle className="w-4 h-4" />}>Left Icon</Button>
        <Button variant="secondary" iconRight={<ChevronDown className="w-4 h-4" />}>Right Icon</Button>
      </div>
    </div>
  ),
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
        <Button size="sm" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
        <Button size="md" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
        <Button size="lg" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
        <Button size="xl" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
        <Button size="2xl" iconLeft={<Circle className="w-4 h-4" />} iconRight={<ChevronDown className="w-4 h-4" />}>Button</Button>
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
