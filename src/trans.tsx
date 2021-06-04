import * as React from 'react'
import { ElementType, ComponentProps } from 'react'
import useTranslation from './useTranslations'
interface transProps extends ComponentProps<any> {
  tag?: ElementType
  path: string
}
const Trans = ({ tag, path, ...rest }: transProps) => {
  const props = rest
  const { t } = useTranslation()
  return React.createElement(tag ? tag : 'span', {
    children: t(path),
    ...props
  })
}

export default Trans
