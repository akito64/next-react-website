import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

function EachPost(props) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export default function Home() {
  return (
    <Container>
      <Meta />
      <title>CUBE</title>
      <meta property="og:title" content="CUBE" />
      <meta name="description" content="アウトプットしていくサイト" />
      <meta property="og:description" content="アウトプットしていくサイト" />
      <h2>おすすめの記事</h2>
      <EachPost title="スケジュール管理と猫の理論" url="/blog/schedule" />
      <EachPost title="音楽が呼び起こす美しいものの記憶" url="/blog/music" />
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(4);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
    },
  };
}

function Decoration(props) {
  return (
    <div style={{ color: 'red'}}>
      {props.children}
    </div>
  )
}
