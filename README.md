# next-ntms

Turn your **N**otion into a powerful, collaborative and automatic **T**ranslation **M**anagement **S**ystem for your next.js app.

# Features 😻

- Very small footprint. 🌬️
- Notion as main source of truth thanks to [their API](https://developers.notion.com/). ⭐
- Empower non technical users to directly improve your site content for better DX and TeamX. 👩‍❤️‍👩
- Render simple string or **complex** _rich text._ 📝
- Automatic and precise translation into more than 20 languages thanks to the [DeepL API integration.](https://www.ntms.dev/using-deepl) 🌍
- Data efficient:
  - Translations are fetched and revalidate in the background using next.js [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).⚡
  - Client receive only necessary translations based on his localization. ⚡
- Extendable with translations outside of notion. ⇒ incremental adoption. 🔓
- Familiar and boilerplate-free api as it's rely on Next.js locale configuration. 💫

# Drawbacks 😿

- next-ntms rely on [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) i.e: translation fetching cannot be use in combination with [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) as Next.js sadly don't allow this for now ⇒ see [[#11424](https://github.com/vercel/next.js/discussions/11424)]
  While it's still possible to use the [`getStaticTranslations`](https://www.ntms.dev/getstatictranslations) function inside your server side logic, we do not advice to do so because of the speed of the Notion API.
  A workaround would be to encapsulate all you components translations inside small databases and use your [`_app`(https://nextjs.org/docs/advanced-features/custom-app)] [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) to fetch them.
- As the Notion API is still in beta and only return text-like blocks, this library is not (yet) suitable for a full and complex translated content management system.

# Getting started 💨

```bash
npm i next-ntms
```

1. **Notion**:
   1. Create your notion integration.
   2. get your api key.
   3. allow your integration to access your translations databases.
   4. set your `NOTION_API_KEY` inside your environnement variables.
2. **Automatic translation**:
   1. set `DEEPL_API_KEY` inside your environnement variables.
   2. set `DEEPL_URL` inside your environnement variables.
   3. define your _locale to DeepL target_lang_ mapping in your `next.config.js` file under `serverRuntimeConfig.ntms.deepl` object.
3. **Configure** your i18n strategy inside `next.config.js` file and make sure to add the corresponding columns in your Notion's databases.
4. **Export** a `getStaticProps` function of your translated pages as [`getStaticTranslations`](https://www.ntms.dev/getstatictranslations) (or use the [`fetchTranslations`](https://www.ntms.dev/fetchtranslations) function to pass a translations props to your page).
5. **Wrap** your page with the [`withTranslation`](https://www.ntms.dev/withtranslations) HOC
6. **Display** your translations with the [`useTranslation`](https://www.ntms.dev/usetranslations) hook or the [`Trans`](https://www.ntms.dev/Trans) component.

# Documentation

[Documentation](https://www.ntms.dev)

# Minimal example

databaseName
| key | en | fr |
|----------------|-------------------|------------------------|
| translationKey | ntms is awesome ! | ntms est fantastique ! |

next.config.js

```jsx
module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en'
  },
  serverRuntimeConfig: {
    ntms: {
      deepl: {
        fr: 'FR'
      }
    }
  }
}
```

/pages/translatedPage.js

```jsx
import {
  withNotionTranslation,
  getStaticTranslations,
  useTranslation
} from 'next-ntms'

const TranslatedPage = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('databaseName.translationKey')}</h1>
      {/*
    will display either "ntms is awesome !"
    or "ntms est fantastique !"
    depending on the locale
    */}
    </div>
  )
}

export const getStaticProps = getStaticTranslations('databaseId')

export default withNotionTranslation(TranslatedPage)
```
