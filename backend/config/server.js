module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8000),
  url: 'http://next-test.server924660.nazwa.pl/panel'
})

