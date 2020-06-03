module.exports = {
  PORT: process.env.PORT || 4000,
  HOST: process.env.HOST || '0.0.0.0',
  DB: process.env.DB || 'mongodb://localhost/veterinaria',
  SECRET_TOKEN: process.env.SECRET_TOKEN || 'miclabesecreta'
}