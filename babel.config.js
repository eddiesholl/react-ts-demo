module.exports = function(api) {
  api.cache(true)

  return {
    'presets': [
      '@babel/env',
      '@babel/react',
      '@babel/typescript'
    ],
    'plugins': [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties'
    ],
    'env': {
      'test': {
        'plugins': []
      }
    }
  }
}
