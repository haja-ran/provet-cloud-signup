import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
  },
})
