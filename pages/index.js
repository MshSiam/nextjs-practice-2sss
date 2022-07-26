import Link from "next/link"

const index = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link href="/blog">
        <a href="">Blog</a>
      </Link>
      <Link href="/product">
        <a href="">Product</a>
      </Link>
    </div>
  )
}

export default index
