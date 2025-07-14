
// src/app.ts
import Fastify from 'fastify'

export const app = Fastify({
  logger: process.env.NODE_ENV === 'production'
    ? true // log as JSON
    : {
        transport: {
          target: 'pino-pretty',
          options: {
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
            colorize: true,
          },
        },
      },
})
