import {client} from './auth.js'

export async function createAuthorizationURL(
  state: string,
  options?: {scopes?: string[]}
): Promise<URL> {
  return await client.createAuthorizationURL({
    state,
    scopes: options?.scopes ?? [],
  })
}

export async function fetcher<T>(path: string, method: Methods, body: T) {
  const response = await fetch(`https://discord.com/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await response.json()
  return data
}
