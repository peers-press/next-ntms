import { RichText } from 'ntms/dist/types'
import renderer from 'react-test-renderer'
import React from 'react'
import t from '../t'

const testRichText = [
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
    plain_text: '{{test}}((s))',
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
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    },
    plain_text: 'And is also '
  },
  {
    type: 'text',
    annotations: {
      bold: true,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    },
    plain_text: 'good'
  },
  {
    type: 'text',
    annotations: {
      bold: false,
      italic: false,
      strikethrough: false,
      underline: false,
      code: false,
      color: 'default'
    },
    plain_text: ' with pluralized string((s))'
  }
] as RichText[]

const testDictionnary1 = {
  test: { test: 'test' }
}
const testDictionnary2 = {
  test: { test: 'test((s))' }
}
const testDictionnary3 = {
  test: { test: '{{test}}((s))' }
}
const testDictionnary4 = {
  test: { test: testRichText }
}
const testDictionnary5 = {
  test: { test: testRichText2 }
}

describe('test pluralizing function', () => {
  it('should return a pluralized text', () => {
    expect(t(testDictionnary1, 'test.test')).toEqual('test')
  })
  it('should return a pluralized text', () => {
    expect(t(testDictionnary2, 'test.test', true)).toEqual('tests')
  })
  it('should return a pluralized text', () => {
    expect(t(testDictionnary3, 'test.test', { test: 'test' }, true)).toEqual(
      'tests'
    )
  })
  it('should return a pluralized text', () => {
    expect(t(testDictionnary3, 'test.test', { fail: 'test' }, true)).toEqual(
      's'
    )
  })
  it('should return a pluralized text', () => {
    const component = renderer.create(
      <div>{t(testDictionnary4, 'test.test', { test: 'page' }, true)}</div>
    )
    const expected = renderer.create(
      <div>
        <span>
          <b>all</b>
        </span>
        <span>pages</span>
      </div>
    )
    expect(component.toJSON()).toEqual(expected.toJSON())
  })
  it('should return a pluralized text', () => {
    const component = renderer.create(
      <div>{t(testDictionnary5, 'test.test', true)}</div>
    )
    const expected = renderer.create(
      <div>
        <span>And is also </span>
        <span>
          <b>good</b>
        </span>
        <span> with pluralized strings</span>
      </div>
    )
    expect(component.toJSON()).toEqual(expected.toJSON())
  })
})
