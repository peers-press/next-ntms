import { database_id } from './types'
import { GetStaticPropsContext } from 'next'
import fetchTranslations from './fetchTranslations'

const getStaticTranslations = (...args: database_id[]) => {
  return async (context: GetStaticPropsContext) => {
    const translations = await fetchTranslations(args, context)
    return {
      props: {
        translations
      },
      revalidate: 40
    }
  }
}
export default getStaticTranslations
