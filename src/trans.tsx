import * as React from 'react'
import { ElementType, ComponentProps } from 'react'
import useTranslation from './useTranslations'
import { variables } from './types'
interface transProps extends ComponentProps<any> {
  tag?: ElementType
  plural: boolean
  variables: variables
  path: string
}
const Trans = ({ tag, path, variables, plural, ...rest }: transProps) => {
  const props = rest
  const { t } = useTranslation()
  return React.createElement(tag ? tag : 'span', {
    children: t(path, variables, plural),
    ...props
  })
}

export default Trans
