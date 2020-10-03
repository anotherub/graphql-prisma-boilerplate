import { extractFragmentReplacements } from 'prisma-binding'
import Mutation from './Mutation'
import Query from './Query'
import Subscription from './Subscription'
import User from './User'

const resolvers = {
  Query,
  Mutation,
  // Subscription,
  User
}
const fragmentReplacements = extractFragmentReplacements(resolvers)
export { resolvers, fragmentReplacements }
