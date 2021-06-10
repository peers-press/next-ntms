import pluralizing from '../pluralizing'

describe('test pluralizing function', () => {
  it('should return a pluralized string ', () => {
    expect(pluralizing("I've got ten message((s))", true)).toBe(
      "I've got ten messages"
    )
  })
  it('should return a singular string ', () => {
    expect(pluralizing("I've got one message((s))", false)).toBe(
      "I've got one message"
    )
  })
  it('should return a singular string ', () => {
    expect(pluralizing("I've got one message((s))")).toBe(
      "I've got one message"
    )
  })
  it('should return the singular version of the string ', () => {
    expect(pluralizing("I've got one ((message,messages))", false)).toBe(
      "I've got one message"
    )
  })
  it('should return the singular version of the string ', () => {
    expect(pluralizing("I've got ten ((message,messages))", true)).toBe(
      "I've got ten messages"
    )
  })
  it('should return the pluralized version of the cyrilic string ', () => {
    expect(pluralizing('Masz 10 ((wiadomość,wiadomości)).', true)).toBe(
      'Masz 10 wiadomości.'
    )
  })
  it('should return the singular version of the chinese string ', () => {
    expect(pluralizing('你有 1 ((信息 ,信息)).', false)).toBe('你有 1 信息.')
  })
  it('should return the singular version of the japanese string ', () => {
    expect(pluralizing('1 ((メッセージ ,メッセージ)) があります。', true)).toBe(
      '1 メッセージ があります。'
    )
  })
})
