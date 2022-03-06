module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8000),
  // proxy: env.bool('IS_PROXIED', true),
  // cron: {
  //   enabled: env.bool('CRON_ENABLED', false),
  // },
  
})

