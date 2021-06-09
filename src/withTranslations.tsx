import * as React from 'react'
import { useRouter } from 'next/router'
import Context from './context'
import { customTranslationsDictonnary } from './types'
import { mustachingOptions } from './types'
import t from './t'
const withTranslations = (
  Component: any,
  translations?: customTranslationsDictonnary
) => {
  const ComponentWithTranslation = (props: any) => {
    const { locale = '' } = useRouter()

    const allTranslations = Object.assign(
      props.translations || {},
      (translations && translations[locale]) || {}
    )
    const tfunc = React.useCallback(
      (path, options?: mustachingOptions | boolean, plural?: boolean) => {
        return t(allTranslations, path, options, plural)
      },
      [locale]
    )
    return (
      <Context.Provider
        value={{ translations: props.translations || {}, t: tfunc, locale }}
      >
        <Component {...props} />
      </Context.Provider>
    )
  }

  return ComponentWithTranslation
}

export default withTranslations
