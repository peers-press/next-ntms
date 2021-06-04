import * as React from 'react'
import { useRouter } from 'next/router'
import renderRichText from './renderRichText'
import Context from './context'
import { customTranslationsDictonnary } from './types'

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
    const t = React.useCallback(
      (path) => {
        const [database, key] = path.split('.')
        const translation = allTranslations[database]?.[key]
        if (!translation) return path
        return typeof translation === 'string'
          ? String(translation)
          : renderRichText(translation)
      },
      [locale]
    )
    return (
      <Context.Provider
        value={{ translations: props.translations || {}, t, locale }}
      >
        <Component {...props} />
      </Context.Provider>
    )
  }

  return ComponentWithTranslation
}

export default withTranslations
