module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd07b79878484c62d0a9bcaf1da56dd1b'),
    },
    path: '/workshop2020-admin',
    build: {
      backend: "https://bioinfo.imd.ufrn.br/workshop2020-api"
    }
  },
  proxy: {
    enabled: true,
    host: "bioinfo.imd.ufrn.br/workshop2020-api",
    port: 443,
    ssl: true
  }
});
