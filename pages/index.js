import Link from "next/link"
import { useRouter } from "next/router"

const index = () => {
  const router = useRouter()

  const handleClick = () => {
    console.log("order placed")
    router.replace("/products")
  }
  return (
    <div>
      <h1>This is Home</h1>
      <Link href="/blog">
        <a href="">Blog</a>
      </Link>
      <Link href="/products">
        <a href="">Products</a>
      </Link>
      <Link href="/news">
        <a href="">News</a>
      </Link>
      <Link href="/dashboard">
        <a href="">Dashboard</a>
      </Link>
      <Link href="/dashboardSWR">
        <a href="">Dashboard-SWR</a>
      </Link>
      <br />
      <br />
      <button onClick={handleClick}>Place Order</button>
      <h1>Currently, learning NEXT.Js</h1>
    </div>
  )
}

export default index
