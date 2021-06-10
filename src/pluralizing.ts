const regexp =
  /\(\(([\:\/\-\\\,\.a-zA-Z0-9\s\u00C0-\u017F\u4e00-\u9fa5\u4E00-\u9FFF\u3040-\u309Fー\u30A0-\u30FF])*\)\)/g

const pluralizing = (string: string, plural?: boolean) => {
  let matches = string.matchAll(regexp)

  Array.from(matches).forEach((match) => {
    const [value] = match
    let [singularValue, pluralValue] = value
      .replace('((', '')
      .replace('))', '')
      .split(',')
    if (!pluralValue) {
      if (plural === true) {
        pluralValue = singularValue
        string = string.replace(value, pluralValue.trim())
      } else {
        string = string.replace(regexp, '')
      }
    } else {
      if (plural === true) {
        string = string.replace(value, pluralValue.trim())
      } else {
        string = string.replace(value, singularValue.trim())
      }
    }
  })

  return string
}

export default pluralizing
