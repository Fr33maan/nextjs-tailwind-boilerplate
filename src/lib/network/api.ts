import { API_URI, IS_DEV, LOCAL_IP, USE_REAL_API_IN_DEV } from "@config"
import { getHeaders, HttpError } from "./helpers"

async function request(method :string, uri:string, body :any, needAuth = false){
  const baseUrl = (IS_DEV && !USE_REAL_API_IN_DEV) ? LOCAL_IP : API_URI
  const url = `${baseUrl}/${uri}`
  const headers = await getHeaders(needAuth)

  if(needAuth && !headers.get('authorization')) {
    // TODO - what should be done ? Throw an error will crash the application
    console.error(`no jwt found while ${uri} needs authentication`)
  }
  
  let res :Response
  if(method === 'GET'){
    res = await fetch(url, {
      method: 'GET',
      headers
    })
  } else if(method === 'POST'){
    res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers,
      body: JSON.stringify(body)
    })
  }else if(method === 'DELETE'){
    res = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers,
      body: JSON.stringify(body)
    })
  }else {
    throw new Error('fetch method must be GET, POST or DELETE')
  }

  if(res.ok){
    try {
      const jsonResponse = await res.json()
      return jsonResponse
    }catch(err){
      return true
    }
  
  } else {
    const textError = await res.text()
    const message = textError.includes('<!DOCTYPE html>') ? 'Une erreur innatendue est arrivée, veuillez contacter le support' : textError

    throw new HttpError({
      url,
      res,
      status: res.status,
      message
    })
  }
}

export async function get<T>(uri :string, needAuth = false) :Promise<T> {
  return request('GET', uri, null, needAuth)
}

export async function post(uri :string, body :any, needAuth = false) {
  return request('POST', uri, body, needAuth)
}

export async function del(uri :string, body :any, needAuth = false) {
  return request('DELETE', uri, body, needAuth)
}
