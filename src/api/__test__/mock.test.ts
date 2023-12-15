import { describe, expect, it } from 'vitest'

describe('mock', async () => {
  it('mock api', async () => {
    const response = await fetch('https://thorn.mock/test') 
    expect(await response.json()).toEqual({
      msg: 'hey'
    })
  })
})