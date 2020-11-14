export default function Home() {
  return 'Hello Next.js'
}

export async function getStaticProps(context) {
  return {
    props: {}
  }
}

export async function getStaticPaths() {
  const paths = [
    { params: { rest: [] } },
    { params: { rest: [ 'careers' ] } }
  ]

  return { paths, fallback: true }
}
