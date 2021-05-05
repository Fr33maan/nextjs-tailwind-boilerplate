export class HttpError extends Error {
    status :string
    url :string
    res :Response
    additionalInfo :any
  
    constructor({ status, message, url, res }){
      super(message)
      this.additionalInfo = {
        url,
        status,
        message
      }
    }
}

export async function getHeaders (needAuth :boolean) {
  const jwt = await getJwt()

  new Headers()

  const headers = new Headers()
  
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json')

  if(needAuth && jwt){
    headers.append('authorization', `${jwt}`)
  }

  return headers
}

export async function getJwt() {
  const jwt = window.localStorage.getItem('jwt')
  if(!jwt || !jwt?.length) return null

  return jwt
}

export function handleError(error :Error){
  console.error(error)
}