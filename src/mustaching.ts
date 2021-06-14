import { variables } from './types'

const regexp = /{{([\:\/\-\\\,\.a-zA-Z0-9\s])*}}/g
const mustaching = (string: string, variables?: variables) => {
  if (!variables) return string.replace(regexp, '')
  Object.keys(variables).forEach((option) => {
    string = string.replace(`{{${option}}}`, variables[option])
  })
  return string.replace(regexp, '')
}

export default mustaching
