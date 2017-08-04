module.exports = {
  PORT: process.env.PORT || 8080,
  DATABASE_URL: process.env.MONGODB || 'mongodb://localhost/entity-sentiment-analysis',
  APP_URL: 'http://localhost:3000' || 'https://senticord.herokuapp.com',
  ALCHEMY_URL: process.env.ALCHEMY_URL,
  API_KEY: process.env.API_KEY
}