module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6eb25fd8433ef7263b3436fec672a85')
  },
  serveAdminPanel: env.bool('SERVE_ADMIN', false),
  url: env('PUBLIC_ADMIN_URL', '/'),
})
