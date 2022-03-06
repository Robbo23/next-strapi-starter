module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'pgsql13.server578330.nazwa.pl'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'server578330_strapitest'),
      user: env('DATABASE_USERNAME', 'server578330_strapitest'),
      password: env('DATABASE_PASSWORD', 'Asda1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
