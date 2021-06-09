import mustaching from '../mustaching'

describe('test mustaching function', () => {
  it('should return a string with a ntms inside ', () => {
    expect(mustaching("I'm a test for {{name}}", { name: 'ntms' })).toBe(
      "I'm a test for ntms"
    )
  })
  it("should return : I'm a test for ntms and i should pass the test", () => {
    expect(
      mustaching("I'm a test for {{name}} and i should {{pass}}", {
        name: 'ntms',
        pass: 'pass the test'
      })
    ).toBe("I'm a test for ntms and i should pass the test")
  })
  it('should return the same string without the mustache', () => {
    expect(mustaching("I'm a test for {{name}}")).toBe("I'm a test for ")
  })
})
