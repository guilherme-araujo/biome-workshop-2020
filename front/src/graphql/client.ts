import { GraphQLClient } from 'graphql-request'

const env_host = process.env.STRAPI_HOST

const addr = env_host ? 'http://'+process.env.STRAPI_HOST+':1340/graphql' : 'https://bioinfo.imd.ufrn.br/workshop2020-api/graphql'

const client = new GraphQLClient(addr)

export default client
