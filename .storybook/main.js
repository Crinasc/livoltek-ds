/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: (config) => {
    // Remove conflicting plugins that cause issues with Storybook
    config.plugins = config.plugins?.filter((plugin) => {
      const problematicPlugins = [
        'vite-plugin-inspect',
        'vite-plugin-vue-inspector',
        'vite-plugin-vue-devtools'
      ]
      return !problematicPlugins.includes(plugin?.name)
    })
    
    // Ensure proper Vue 3 configuration
    config.define = {
      ...config.define,
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }
    
    return config
  },
}
export default config
