import http from 'http';
import app from './app';
import Logger from './utils/logger'

const server = http.createServer(app)

const PORT = process.env.serverPORT || 5000

server.listen(PORT, () => {
  Logger.info(`NodeJS backend API is running in port ${PORT}.`)
})