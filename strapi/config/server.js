module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1340),
  url: '/workshop2020-api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd07b79878484c62d0a9bcaf1da56dd1b'),
    },
    url: 'http://localhost:1340/workshop2020-admin'
  }
});
