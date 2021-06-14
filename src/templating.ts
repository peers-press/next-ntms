import mustaching from './mustaching'
import pluralizing from './pluralizing'
import { variables } from './types'

const templating = (
  string: string,
  options?: variables | boolean,
  plural?: boolean
) => {
  if (typeof options === 'boolean') {
    plural = options
  }

  return pluralizing(mustaching(string, options as variables), plural)
}

export default templating
