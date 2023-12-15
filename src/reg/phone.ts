export function regChinesePhoneNumber(phoneNumber: string) {
  const regex = /^1[3456789]\d{9}$/
  return regex.test(phoneNumber)
}

/**
 * 为了解决 ts 报错
 * 需要在 tsconfig.json 中添加
 * {"compilerOptions": {"types": ["vitest/importMeta"]}}
 */
if(import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('phone number belongs to Chinese', () => {
    expect(regChinesePhoneNumber('41772566381')).toBe(false)
  })
}