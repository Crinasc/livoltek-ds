import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  args: {
    placeholder: 'username',
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'password',
  },
};

export const Disabled = {
  args: {
    placeholder: 'disabled input',
    disabled: true,
  },
};

export const WithValue = {
  args: {
    placeholder: 'username',
    value: 'john.doe@example.com',
  },
};

export const AllTypes = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="email" placeholder="email@example.com" />
      <Input placeholder="disabled input" disabled />
    </div>
  ),
};
