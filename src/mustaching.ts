import { mustachingOptions } from './types'

const regexp = /{{([\:\/\-\\\,\.a-zA-Z0-9\s])*}}/g
const mustaching = (string: string, options?: mustachingOptions) => {
  if (!options) return string.replace(regexp, '')
  Object.keys(options).forEach((option) => {
    string = string.replace(`{{${option}}}`, options[option])
  })
  return string.replace(regexp, '')
}

export default mustaching
