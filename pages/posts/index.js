const index = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => {
        ;<div key={post.id}>
          <h2>{post.id}</h2>
          <h3>{post.title}</h3>
        </div>
      })}
    </>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  return {
    props: {
      posts: data.slice(0, 4)
    }
  }
}
