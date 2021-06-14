const regexp = /\(\(([\:\/\-\\\,\s\u0030-\u4351\u4e00-\u9fa5])*\)\)/g

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
