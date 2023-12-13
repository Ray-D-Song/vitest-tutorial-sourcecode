import { describe, expect, test } from 'vitest'
import { regChinesePhoneNumber } from '../phone'

describe('phone', () => {
  test('phone number belongs to Chinese', () => {
    expect(regChinesePhoneNumber('17725663831')).toBe(true)
  })
})