import * as React from 'react'
import { mustachingOptions } from './types'
import { ntmsContext } from './types'
const Context = React.createContext<ntmsContext>({
  locale: undefined,
  t: (path: string, options?: mustachingOptions) => {
    console.log(options)
    return path
  },
  translations: {}
})

export default Context
