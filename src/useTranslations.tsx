import * as React from 'react'
import i18n from './context'
import { ntmsContext } from './types'
const useTranslations = (): ntmsContext => {
  return React.useContext(i18n)
}

export default useTranslations
