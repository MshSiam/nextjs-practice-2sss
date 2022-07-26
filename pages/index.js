import Link from "next/link"
import { useRouter } from "next/router"

const index = () => {
  const router = useRouter()

  const handleClick = () => {
    console.log("order placed")
    router.replace("/product")
  }
  return (
    <div>
      <h1>This is Home</h1>
      <Link href="/blog">
        <a href="">Blog</a>
      </Link>
      <Link href="/product">
        <a href="">Product</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}

export default index
