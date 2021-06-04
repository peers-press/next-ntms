import { database_id } from './types'
import { GetStaticPropsContext } from 'next'
import getConfig from 'next/config'

const getStaticTranslations = (...args: database_id[]) => {
  return async (context: GetStaticPropsContext) => {
    const fetchTranslations = (await import('ntms')).fetchTranslations
    const translations = await fetchTranslations(args, {
      locale: context.locale,
      defaultLocale: context.defaultLocale,
      config: getConfig().serverRuntimeConfig.ntms
    })
    return {
      props: {
        translations
      },
      revalidate: 40
    }
  }
}
export default getStaticTranslations
