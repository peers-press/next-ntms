//
import { RichText } from 'ntms/dist/types'
import React from 'react'
import renderer from 'react-test-renderer'
import renderRichText from '../renderRichText'

const testRichText = [
  {
    type: 'text',
    plain_text: 'page((s))',
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    }
  }
] as RichText[]

const testRichText2 = [
  {
    type: 'text',
    plain_text: 'all',
    annotations: {
      bold: true,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    }
  },
  {
    type: 'text',
    plain_text: 'page((s))',
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    }
  }
] as RichText[]

describe('test pluralizing function', () => {
  it('should return a pluralized text', () => {
    const component = renderer.create(
      <div>{renderRichText(testRichText, {}, true)}</div>
    )
    const result = renderer
      .create(
        <div>
          <span>pages</span>
        </div>
      )
      .toJSON()
    let tree = component.toJSON()
    expect(tree).toEqual(result)
  })
  it('should return a pluralized text from multiples richText block', () => {
    const component = renderer.create(
      <div>{renderRichText(testRichText2, {}, true)}</div>
    )
    const result = renderer
      .create(
        <div>
          <span>
            <b>all</b>
          </span>
          <span>pages</span>
        </div>
      )
      .toJSON()
    let tree = component.toJSON()
    expect(tree).toEqual(result)
  })
  it('should return a non-pluralized text', () => {
    const component = renderer.create(<div>{renderRichText(testRichText)}</div>)
    const result = renderer
      .create(
        <div>
          <span>page</span>
        </div>
      )
      .toJSON()
    let tree = component.toJSON()
    expect(tree).toEqual(result)
  })
})
