var Redis = require('ioredis')
const { redisUrl } = require('../config')

const redis = new Redis(15577, process.env.REDIS_HOSTNAME, {
  password: process.env.REDIS_PASSWORD,
})
const redisSubscribe = new Redis(15577, process.env.REDIS_HOSTNAME, {
  password: process.env.REDIS_PASSWORD,
})

module.exports = {
  redis,
  redisSubscribe,
  redisUrl,
}
