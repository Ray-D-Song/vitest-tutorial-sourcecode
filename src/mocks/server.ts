import { setupServer } from 'msw/node'
import { HttpHandler, HttpResponse, http } from 'msw'

export const handlers: Array<HttpHandler> = [
  http.get('https://thorn.mock/test', () => {
    return HttpResponse.json({
      msg: 'hey'
    })
  })
]

export const server = setupServer(...handlers)