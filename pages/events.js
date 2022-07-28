function EventList({ eventList }) {
  return (
    <>
      <h1>List of Evnets</h1>
      {eventList.map((event) => {
        return (
          <div className="fff" key={event.id}>
            <h2>{event.id}</h2>
            <h2>{event.title}</h2>
            <h2>{event.date}</h2>
            <h2>{event.category}</h2>
          </div>
        )
      })}
    </>
  )
}

export default EventList

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/events`)
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}
