import Head from 'next/head'

// サイトに関する情報
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle }) {
    // ページのタイトル
    const title = pageTitle ? '${pageTitle} | ${siteTitle}' : siteTitle
    
    return (
        <Head>
            <title>{pageTitle} | {siteTitle}</title>
            <meta property="og:title" content={'${pageTitle} | ${siteTitle}'} />
        </Head>
    )
}