import {OAuth2Client} from 'oslo/oauth2'

const authorizeEndpoint = 'https://discord.com/oauth2/authorize'
const tokenEndpoint = 'https://discord.com/api/oauth2/token'

export const client = new OAuth2Client(
  process.env.DISCORD_CLIENT_ID!,
  authorizeEndpoint,
  tokenEndpoint,
  {redirectURI: process.env.DISCORD_CALLBACK_URL!}
)
