import Button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
}

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
  },
}

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
}

export const Medium = {
  args: {
    label: 'Medium Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
}

export const Large = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
}

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
}

export const AllVariants = {
  render: () => ({
    components: { Button },
    template: `
      <div class="space-y-4">
        <div class="space-x-2">
          <Button label="Primary Small" variant="primary" size="small" />
          <Button label="Primary Medium" variant="primary" size="medium" />
          <Button label="Primary Large" variant="primary" size="large" />
        </div>
        <div class="space-x-2">
          <Button label="Secondary Small" variant="secondary" size="small" />
          <Button label="Secondary Medium" variant="secondary" size="medium" />
          <Button label="Secondary Large" variant="secondary" size="large" />
        </div>
        <div class="space-x-2">
          <Button label="Disabled Primary" variant="primary" size="medium" :disabled="true" />
          <Button label="Disabled Secondary" variant="secondary" size="medium" :disabled="true" />
        </div>
      </div>
    `,
  }),
}
