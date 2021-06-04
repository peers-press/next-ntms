import * as React from 'react'
import { RichText } from './types'
const renderRichText = (data: RichText[]): JSX.Element[] => {
  const getChildren = (
    { annotations, plain_text, href }: RichText,
    i: number
  ) => {
    try {
      const { bold, code, color, italic, strikethrough, underline } =
        annotations
      let children = <span>{plain_text}</span>

      if (bold) {
        children = <b>{children}</b>
      }
      if (code) {
        children = <pre>{children}</pre>
      }
      if (strikethrough) {
        children = (
          <span style={{ textDecoration: 'line-through' }}>{children}</span>
        )
      }
      if (underline) {
        children = <u>{children}</u>
      }
      if (italic) {
        children = <i>{children}</i>
      }
      if (color && color !== 'default') {
        children = <mark data-color={color}>{children}</mark>
      }
      if (href !== null) {
        children = (
          <a target='_blank' href={href}>
            {children}
          </a>
        )
      }
      return <span key={i}>{children}</span>
    } catch (err) {
      return <span key={i}></span>
    }
  }
  let text = []
  const length = data.length
  for (let i = 0; i < length; i++) {
    text.push(getChildren(data[i], i))
  }
  return text
}

export default renderRichText
