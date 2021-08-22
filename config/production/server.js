module.exports = {
  host: env('HEROKU_URL', '0.0.0.0'),
  port: env.int('PORT', 1337),
};
 