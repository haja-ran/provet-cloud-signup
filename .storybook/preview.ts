import { setup } from '@storybook/vue3';

setup((app) => {
  app.config.compilerOptions.isCustomElement = tag => tag.includes('-')
});