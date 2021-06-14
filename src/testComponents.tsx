import withTranslations from './withTranslations'

const testPageWithoutTranslations = (props: any) => {
  return props.children
}

const testPage = withTranslations(testPageWithoutTranslations, {
  en: { test: { test: 'test' } }
})

export default testPage
