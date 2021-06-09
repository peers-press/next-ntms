const regexp = /\(\(([\:\/\-\\\,\.a-zA-Z0-9\s])*\)\)/g

const pluralizing = (string: string, plural?: boolean) => {
  let matches = string.matchAll(regexp)

  Array.from(matches, (match) => {
    const [value] = match
    let [singularValue, pluralValue] = value
      .replace('((', '')
      .replace('))', '')
      .split(',')
    if (!pluralValue) {
      if (plural === true) {
        pluralValue = singularValue
        string = string.replace(value, pluralValue)
      } else {
        string = string.replace(regexp, '')
      }
    } else {
      if (plural === true) {
        string = string.replace(value, pluralValue)
      } else {
        string = string.replace(value, singularValue)
      }
    }
  })

  return string
}

export default pluralizing
