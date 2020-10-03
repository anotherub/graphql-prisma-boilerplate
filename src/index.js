import '@babel/polyfill'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import prisma from './prisma'
import { fragmentReplacements, resolvers } from './resolvers/index'

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {
    return {
      pubsub,
      prisma,
      request
    }
  },
  fragmentReplacements
})

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up!')
})
