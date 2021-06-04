import { database_id } from './types'
import { GetStaticPropsContext } from 'next'
import getConfig from 'next/config'

const fetchTranslations = async (
  databases: database_id[],
  context: GetStaticPropsContext
) => {
  const fetcher = (await import('ntms')).fetchTranslations
  const translations = await fetcher(databases, {
    locale: context.locale,
    defaultLocale: context.defaultLocale,
    config: getConfig().serverRuntimeConfig.ntms
  })
  translations
}
export default fetchTranslations
