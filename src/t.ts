import { mustachingOptions, translationsDictonnary } from './types'
import templating from './templating'
import renderRichText from './renderRichText'
const t = (
  allTranslations: translationsDictonnary,
  path: string,
  options?: mustachingOptions | boolean | undefined,
  plural?: boolean | undefined
) => {
  if (typeof options === 'boolean' && typeof plural === 'undefined') {
    plural = options
  }

  const [database, key] = path.split('.')
  const translation = allTranslations[database]?.[key]
  if (!translation) return path
  return typeof translation === 'string'
    ? templating(String(translation), options, plural)
    : renderRichText(translation, options as mustachingOptions, plural)
}

export default t
