import * as React from 'react'
import { ntmsContext } from './types'
const Context = React.createContext<ntmsContext>({
  locale: undefined,
  t: (path: string) => path,
  translations: {}
})

export default Context
