const users = ({ users }) => {
  return (
    <div>
      <h1>List Of Users.</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
          </div>
        )
      })}
    </div>
  )
}

export default users

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
  //   console.log(data)
  return {
    props: {
      users: data
    }
  }
}
