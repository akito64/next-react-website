import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

export default function Blog() {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <title>ブログ | CUBE</title>
      <meta property="og:title" content="ブログ | CUBE" />
      <meta name="description" content="ブログの記事一覧" />
      <meta property="og:description" content="ブログの記事一覧" />
    <Hero title="Blog" subtitle="Recent Posts" imageOn />
      </Container>
    )
}