import templating from '../templating'

describe('test pluralizing function', () => {
  it('should return a pluralized string ', () => {
    expect(
      templating("I've got {{number}} message((s))", { number: 'ten' }, true)
    ).toBe("I've got ten messages")
  })

  it('should return a singularized string ', () => {
    expect(
      templating("I've got {{number}} message((s))", { number: 'one' })
    ).toBe("I've got one message")
  })

  it('should return a singularized string ', () => {
    expect(
      templating(
        "I've got one (({{typeSingular}},{{typePlural}}))",
        { typeSingular: 'message', typePlural: 'messages' },
        false
      )
    ).toBe("I've got one message")
  })
  it('should return a singularized string ', () => {
    expect(
      templating("I've got one (({{typeSingular}},{{typePlural}}))", {
        typeSingular: 'message',
        typePlural: 'messages'
      })
    ).toBe("I've got one message")
  })

  it('should return a pluralized string ', () => {
    expect(
      templating(
        "I've got ten (({{typeSingular}},{{typePlural}}))",
        { typeSingular: 'message', typePlural: 'messages' },
        true
      )
    ).toBe("I've got ten messages")
  })
  it('should return a pluralized string ', () => {
    expect(templating("I've got ten {{message}}((s))", true)).toBe(
      "I've got ten s"
    )
  })
  it('should return a pluralized string ', () => {
    expect(templating("I've got ten message((s))", true)).toBe(
      "I've got ten messages"
    )
  })
  it('should return a singulars string ', () => {
    expect(templating("I've got one message((s))")).toBe("I've got one message")
  })
  it('should return a singulars string ', () => {
    expect(templating('And is also good with pluralized string((s))')).toBe(
      'And is also good with pluralized string'
    )
  })
})
