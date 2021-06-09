import mustaching from './mustaching'
import pluralizing from './pluralizing'
import { mustachingOptions } from './types'

const templating = (
  string: string,
  options?: mustachingOptions | boolean,
  plural?: boolean
) => {
  if (typeof options === 'boolean') {
    plural = options
  }

  return pluralizing(mustaching(string, options as mustachingOptions), plural)
}

export default templating
