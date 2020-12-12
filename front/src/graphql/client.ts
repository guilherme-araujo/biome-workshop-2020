import { GraphQLClient } from 'graphql-request'

const env_host = process.env.STRAPI_HOST

const addr = env_host ? 'http://'+process.env.STRAPI_HOST+':1337/graphql' : 'http://localhost:1340/graphql'

const client = new GraphQLClient(addr)

export default client
