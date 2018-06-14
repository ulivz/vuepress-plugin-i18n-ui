module.exports = (options = {}, context) => ({
  name: 'i18n-ui',
  clientOnly: true,
  enhanceAppFiles: [
    context.resolve(__dirname, 'client.js')
  ],
  additionalPages: [
    {
      override: false,
      route: options.route || '/i18n-ui/',
      path: context.resolve(__dirname, 'index.md')
    }
  ]
})
