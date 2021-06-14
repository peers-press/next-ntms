export type database_id = string
export type databases = database_id[]
export declare type Color =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'

export declare type BackgroundColor =
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background'

export interface RichText {
  plain_text: string
  href?: string
  annotations: Annotations
  type?: string
}
export type annotationsKey =
  | 'bold'
  | 'code'
  | 'italic'
  | 'strikethrough'
  | 'underline'
  | 'color'

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: Color | BackgroundColor
}
export interface translationsDictonnary {
  [database: string]: databaseDictionnary
}
export interface databaseDictionnary {
  [key: string]: string | RichText[]
}

export interface ntmsContext {
  translations: translationsDictonnary
  t: (
    path: string,
    options?: variables | boolean,
    plural?: boolean
  ) => string | JSX.Element[]
  locale: string | undefined
}

export interface customTranslationsDictonnary {
  [lang: string]: translationsDictonnary
}
export interface variables {
  [key: string]: string
}
