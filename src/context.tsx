import * as React from 'react'
import { variables } from './types'
import { ntmsContext } from './types'
const Context = React.createContext<ntmsContext>({
  locale: undefined,
  t: (path: string, options?: variables) => {
    console.log(options)
    return path
  },
  translations: {}
})

export default Context
