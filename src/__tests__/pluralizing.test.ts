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
})
