interface Model {
  id: string
  date: string
  entries: {
    id: string
    content: string
  }[]
}

type UserModel = unknown

export default function Page() {
  const resource: UserModel = {
    id: "Hello",
    date: undefined,
    entries: [],
  }

  return (
    <div>
      {resource.entries?.map((entry) => (
        <div key={entry.id}>{entry.content}</div>
      ))}
    </div>
  )
}
