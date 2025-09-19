import Button from './Button';

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
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    state: 'default',
    children: 'Button Test',
  },
};

export const PrimaryHover = {
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button Test',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    state: 'default',
    children: 'Button Test',
  },
};

export const SecondaryHover = {
  args: {
    variant: 'secondary',
    state: 'hover',
    children: 'Button Test',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const AllVariants = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button variant="primary" state="default">Primary Default</Button>
        <Button variant="primary" state="hover">Primary Hover</Button>
      </div>
      <div className="space-x-2">
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
