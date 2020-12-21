// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_END === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disabled: !isProd
  }
})