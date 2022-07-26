const user = ({ user }) => {
  return (
    <div>
      <div>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
      </div>
    </div>
  )
}

export default user
