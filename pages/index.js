import Container from 'components/container'
import Hero from 'components/hero'

export default function Home() {
  return ( 
      <Container>
    <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
      </Container>
    )
}
function EachPost() {
  return (
    <article>
      <a href="post.html">
        <h3>記事のタイトル</h3>
      </a>
    </article>
  )
}

export default function Posts() {
  return (
    <section>
      <h2>おすすめの記事</h2>
      <EachPost />
      <EachPost />
    </section>
  )
}

function EachPost(props) {
  return (
    <article>
      <a href={props.url}>
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export default function Posts() {
  return (
    <section>
      <h2>おすすめの記事</h2>
      <EachPost title="スケジュール管理と猫の理論" url="/blog/schedule" />
      <EachPost title="音楽が呼び起こす美しいものの記憶" url="/blog/music" />
    </section>
  )
}

function Decoration(props) {
  return (
    <div style={{ color: 'red'}}>
      {props.children}
    </div>
  )
}
