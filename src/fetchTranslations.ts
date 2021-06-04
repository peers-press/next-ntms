import { database_id } from './types'
import { GetStaticPropsContext } from 'next'
import getConfig from 'next/config'

const fetchTranslations = async (
  databases: database_id[],
  context: GetStaticPropsContext
) => {
  const fetcher = (await import('ntms')).fetchTranslations
  const config = getConfig().serverRuntimeConfig.ntms || {}
  return await fetcher(databases, {
    locale: context.locale,
    defaultLocale: config.defaultLocale,
    deepl: config.deepl
  })
}
export default fetchTranslations
